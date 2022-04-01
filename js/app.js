/////////////////////////////
// sketchy globals go here //
/////////////////////////////
// initialize our map
const map = L.map('map', {
  center: [41, -69], // center map to the waters off beautiful Nauset
  zoom: 4, // set the zoom level
});
// add a baselayer to the map
const OpenStreetMap = L.tileLayer('http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://raw.githubusercontent.com/CartoDB/basemap-styles/master/LICENSE.md">Carto CDN</a>',
}).addTo(map);
// game variables
const game = {
  currentFlag: undefined,
  previousFlag: undefined,
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
  roundStartedAt: undefined,
};

///////////////////////////////////
// global functions for the game //
///////////////////////////////////
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function round(input) {
  // round to 2 decimal places
  return Math.round(input * 100) / 100;
}

function calculateScore(distance) {
  let score = 0;
  if (distance > 1000) {
    return score;
  }

  // check if the guess was < 5 seconds
  if (new Date() - game.roundStartedAt < 5 * 1000) {
    score += 1000; // bonus points for fast guesses
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

function toRad(input) {
  return (input * Math.PI) / 180;
}

function haversine(lhs, rhs) {
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
  shuffle(game.flags);
  return game.flags.pop();
}

function endGame() {
  // Bonus points for lots of guesses in the time allowed
  if (game.guesses > 50) {
    game.score += 10000;
  }

  // Do this on the next event loop tick
  setTimeout(() => {
    const summary = `
G A M E O V E R
rounds: ${game.rounds}
score: ${game.score.total}

guesses:
${game.guesses.map((g) => `${g.name}: ${g.score} (${g.distance} km)`).join('\n')}

good job!
 `;
    if (alert(summary)) {
    } else {
      window.location.reload();
    }
  }, 0);
}

function attemptNextFlag() {
  // move on to the next flag
  game.currentFlag = popRandomFlag();
  if (!game.currentFlag) {
    endGame();
  } else {
    game.previousFlag = game.currentFlag;
    let elem = document.getElementById('flag-img');
    if (!elem) {
      elem = document.createElement('img');
    }
    elem.setAttribute('id', 'flag-img');
    elem.setAttribute('src', `https://flagcdn.com/224x168/${game.currentFlag.iso.toLowerCase()}.png`);
    elem.setAttribute('width', '224');
    elem.setAttribute('height', '168');
    elem.setAttribute('alt', 'Flag to guess');
    document.getElementById('flag').appendChild(elem);
  }
}

function updateGameState(event) {
  // do not handle events when game is paused
  if (!game.pause && event) {
    // pause the game until the "next" button is pressed
    game.pause = true;
    document.getElementById('next-button').disabled = false;
    const distance = round(haversine(event.latlng, game.previousFlag.latlng));
    if (game.currentLine) {
      game.currentLine.remove(map);
    }
    game.currentLine = L.polyline([event.latlng, game.previousFlag.latlng], {
      color: '#007BA7', // cerulean
      weight: 0.5,
      opacity: 50,
    }).addTo(map);
    for (const marker of game.currentMarkers) {
      marker.remove(map);
    }
    game.currentMarkers = [];
    // guess marker
    game.currentMarkers.push(
      L.marker([event.latlng.lat, event.latlng.lng], {
        icon: new L.DivIcon({
          className: 'previous-guess-icon',
          html: `<span class="previous-guess-span">Your Guess</span>`,
        }),
      }).addTo(map)
    );
    // answer marker
    game.currentMarkers.push(
      L.marker([game.previousFlag.latlng.lat, game.previousFlag.latlng.lng], {
        icon: new L.DivIcon({
          className: 'previous-answer-icon',
          html: `<span class="previous-answer-span">${game.previousFlag.name}</span>`,
        }),
        title: game.previousFlag.name,
      }).addTo(map)
    );
    game.score.last = calculateScore(distance);
    game.score.total += game.score.last;
    game.guesses.push({
      name: game.previousFlag.name,
      distance,
      score: game.score.last,
    });
    game.rounds++;
    document.getElementById('guess').innerText = `You were ${distance} km away from ${game.previousFlag.name}`;
    document.getElementById('rounds').innerText = `rounds: ${game.rounds}`;
    document.getElementById('total-score').innerText = `score: ${game.score.total}`;
    document.getElementById('last-score').innerText = `last score: ${game.score.last}`;
    if (game.score.last > game.score.best) {
      game.score.best = game.score.last;
    }
    document.getElementById('best-score').innerText = `best score: ${game.score.best}`;
    if (game.score.last < game.score.worst) {
      game.score.worst = game.score.last;
    }
    document.getElementById('worst-score').innerText = `worst score: ${game.score.worst}`;
    game.score.avg = round(game.guesses.reduce((acc, guess) => acc + guess.score, 0) / game.guesses.length);
    document.getElementById('avg-score').innerText = `avg score: ${game.score.avg}`;
  }
}

////////////////////
// setup the game //
////////////////////
map.on('click', updateGameState);
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function () {
  nextButton.disabled = true;
  game.pause = false;
  game.roundStartedAt = new Date();
  attemptNextFlag();
});

alert(`
To play the game, click as close as possible to the capital city of the country whose flag is displayed.

Your score is calculated based on how close you are, as long as your guess is within 1000 km. Bonus points for guessing quickly.

You have 2 minutes. Click OK to start the game. Good luck!
`);

// start the timer
let secondsLeft = 2 * 60; // 2 minutes
// let secondsLeft = 30; // 2 minutes
const gameTimerInterval = setInterval(function () {
  if (!game.pause) {
    secondsLeft -= 1;
    document.getElementById('game-timer').innerHTML = `time left: ${secondsLeft} seconds`;

    if (secondsLeft <= 0) {
      clearInterval(gameTimerInterval);
      endGame();
    }
  }
}, 1000);

// let's get started!
attemptNextFlag();
updateGameState();
const navbar = document.getElementById('navbar');
navbar.style.display = 'block';
