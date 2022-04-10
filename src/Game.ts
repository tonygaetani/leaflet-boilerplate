import EmojiConvertor from "emoji-js";
import L, { LatLng, LeafletMouseEvent, Marker, Polyline } from "leaflet";
import { Capital, Flag, flags } from "./Flags";

/////////////////////////////
// sketchy globals go here //
/////////////////////////////
let map: L.Map;

// game variables
export type Guess = {
	iso: string,
	capital: Capital,
	distance: number,
	score: number,
};
export type GameState = {
  currentFlag: Flag,
  previousFlag: Flag,
  currentLine: Polyline|undefined,
  currentMarkers: Marker[],
  guesses: Guess[],
  rounds: number,
  score: {
    total: number,
    last: number,
    best: number,
    worst: number,
    avg: number,
  },
  flags: Flag[],
  pause: boolean,
  roundStartedAt: Date,
};

const eesti = flags.find((f) => f.capitals.some((c) => c.name.includes('Tallinn')))!;
export const gameState: GameState = {
  currentFlag: eesti,
  previousFlag: eesti,
  currentLine: undefined,
  currentMarkers: [],
  guesses: [],
  rounds: 0,
  score: {
    total: 0,
    last: 0,
    best: 0,
    worst: 0,
    avg: 0,
  },
  flags,
  pause: false,
  roundStartedAt: new Date(),
};

///////////////////////////////////
// global functions for the game //
///////////////////////////////////
export function initializeGame() {
	map = L.map('map', {
		center: [41, -69], // center map to the waters off beautiful Nauset
		zoom: 4,
		worldCopyJump: true,
	});
	// add a baselayer to the map
	L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 20,
	}).addTo(map);
	// register event listeners
	map.on('click', updateGameState);
	const nextButton = document.getElementById('next-button')!;
	nextButton.addEventListener('click', function () {
		(nextButton as any).disabled = true;
		gameState.pause = false;
		gameState.roundStartedAt = new Date();
		for (const marker of gameState.currentMarkers) {
			marker.remove();
		}
		gameState.currentMarkers = [];
		if (gameState.currentLine) {
			gameState.currentLine.remove();
		}
		attemptNextFlag();
	});
}

function shuffle(array: unknown[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function round(input: number) {
  // round to 2 decimal places
  return Math.round(input * 100) / 100;
}

function calculateScore(distance: number) {
  let score = 0;
  if (distance > 1000) {
    return score;
  }

  // check if the guess was < 5 seconds
  const guessDuration = new Date().getTime() - gameState.roundStartedAt.getTime();
  if (guessDuration < 5 * 1000) {
    score += (5000 - guessDuration) * 2; // bonus points for fast guesses
  }

  if (distance > 500) {
    // e.g. 999 = 1, 501 = 499 (for the second part)
    return score + 1000 - Math.round(distance);
  } else if (distance < 500 && distance >= 400) {
    return score + 500;
  } else if (distance < 400 && distance >= 300) {
    return score + 750;
  } else if (distance < 300 && distance >= 200) {
    return score + 1000;
  } else if (distance < 220 && distance >= 100) {
    return score + 1500;
  } else {
    return score + 2000;
  }
}

function toRad(input: number) {
  return (input * Math.PI) / 180;
}

function haversine(lhs: Pick<LatLng, 'lat'|'lng'>, rhs: Pick<LatLng, 'lat'|'lng'>) {
  const R = 6371; // radius of earth in km
  const x1 = lhs.lat - rhs.lat;
  const dLat = toRad(x1);
  const x2 = lhs.lng - rhs.lng;
  const dLng = toRad(x2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(rhs.lat)) * Math.cos(toRad(lhs.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const result = R * c;
  // result /= 1.60934; // miles
  return result;
}

function popRandomFlag() {
  shuffle(gameState.flags);
  return gameState.flags.pop();
}

const emoji = new EmojiConvertor();
emoji.replace_mode = 'unified';
emoji.allow_native = true;
function getFlagEmoji(iso: string) {
  return emoji.replace_colons(`:flag-${iso.toLowerCase()}:`);
}

function endGame() {
  // Bonus points for lots of guesses in the time allowed
  let bonus = ``;
  if (gameState.guesses.length > 35) {
    gameState.score.total += 25000;
    bonus = '<div id="bonus" class="display-value h4 bonus">BONUS POINTS: 25000</div>';
  }

  // Do this on the next event loop tick
  setTimeout(() => {
    document.body.innerHTML = `
<div id="start-end-game-content">
  <div id="start-end-game">
    <marquee class="h3">G A M E O V E R</marquee>
    <div id="results" class="display-value h6">Rounds: ${gameState.rounds}</div>
    <div id="score" class="display-value h6">Total score: ${gameState.score.total}</div>
    ${bonus}
    <div id="best-score" class="display-value h6">Best score: ${gameState.score.best}</div>
    <div id="worst-score" class="display-value h6">Worst score: ${gameState.score.worst}</div>
    <div id="avg-score" class="display-value h6">Average score: ${gameState.score.avg}</div>
    <div class="results h6">Guesses:</div>
    ${gameState.guesses
      .map(
        (g) =>
          `<div class="display-value h6">${getFlagEmoji(g.iso)} ${g.capital.name}: ${g.score} (${g.distance} km)</div>`
      )
      .join('')}
  </div>
  <p />
  <button class="btn btn-default btn-lg" onClick="window.location.reload();">start over</button>
</div>
`;
  }, 0);
}

function attemptNextFlag() {
  // move on to the next flag
	const nextFlag = popRandomFlag();
  if (!nextFlag) {
    endGame();
  } else {
  	gameState.currentFlag = nextFlag;
    gameState.previousFlag = gameState.currentFlag;
    let elem = document.getElementById('flag-img');
    if (!elem) {
      elem = document.createElement('img');
    }
    elem.setAttribute('id', 'flag-img');
    elem.setAttribute('class', 'img-responsive');
    elem.setAttribute('src', `https://flagcdn.com/256x192/${gameState.currentFlag.iso.toLowerCase()}.png`);
    elem.setAttribute('width', '256');
    elem.setAttribute('height', '192');
    elem.setAttribute('alt', 'Flag to guess');
    document.getElementById('flag')!.appendChild(elem);
  }
}

function updateGameState(event?: LeafletMouseEvent) {
  // do not handle events when game is paused
  if (!gameState.pause && event) {
    // pause the game until the "next" button is pressed
    gameState.pause = true;
    (document.getElementById('next-button') as any).disabled = false;
    let distance = Number.POSITIVE_INFINITY;
    let capital = undefined;
    for (const capitalToCheck of gameState.previousFlag?.capitals || []) {
      const distanceFromCapital = round(haversine(event.latlng, capitalToCheck.latlng));
      if (distanceFromCapital < distance) {
        distance = distanceFromCapital;
        capital = capitalToCheck;
      }
    }
		// assume nothing is greater than everything
		capital = capital!;
    gameState.currentLine = L.polyline([event.latlng, capital.latlng], {
      color: '#007BA7', // cerulean
      weight: 0.5,
      opacity: 50,
    }).addTo(map);
    // guess marker
    gameState.currentMarkers.push(
      L.marker([event.latlng.lat, event.latlng.lng], {
        icon: new L.DivIcon({
          className: 'previous-guess-icon',
          html: `<span class="previous-guess-span">Your Guess</span>`,
        }),
      }).addTo(map)
    );
    // answer marker
    gameState.currentMarkers.push(
      L.marker([capital.latlng.lat, capital.latlng.lng], {
        icon: new L.DivIcon({
          className: 'previous-answer-icon',
          html: `<span class="previous-answer-span">${capital.name}</span>`,
        }),
      }).addTo(map)
    );
    gameState.score.last = calculateScore(distance);
    gameState.score.total += gameState.score.last;	
    gameState.guesses.push({
      iso: gameState.previousFlag.iso,
      capital,
      distance,
      score: gameState.score.last,
    });
    gameState.rounds++;
    document.getElementById('guess')!.innerText = `You were ${distance} km away from ${capital.name}`;
    document.getElementById('total-score')!.innerText = `Score: ${gameState.score.total}`;
    document.getElementById('last-score')!.innerText = `Last score: ${gameState.score.last}`;
    if (gameState.score.last > gameState.score.best) {
      gameState.score.best = gameState.score.last;
    }
    if (gameState.score.last < gameState.score.worst) {
      gameState.score.worst = gameState.score.last;
    }
    gameState.score.avg = round(gameState.guesses.reduce((acc, guess) => acc + guess.score, 0) / gameState.guesses.length);
  }
}

////////////////////
// setup the game //
////////////////////
export function startGame() {
  // start the timer
  let secondsLeft = 2 * 60; // 2 minutes
  const gameTimerInterval = setInterval(function () {
    if (!gameState.pause) {
      secondsLeft -= 1;
      document.getElementById('game-timer')!.innerHTML = `Time left: ${secondsLeft} seconds`;

      if (secondsLeft <= 0) {
        clearInterval(gameTimerInterval);
        endGame();
      }
    }
  }, 1000);

  // let's get started!
  attemptNextFlag();
  updateGameState();
  document.getElementById('navbar')!.style.display = 'block';
  document.getElementById('map')!.style.display = 'block';
  map.invalidateSize();
  document.getElementById('start-end-game')!.style.display = 'none';
}
