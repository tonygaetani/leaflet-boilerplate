/////////////////////////////
// sketchy globals go here //
/////////////////////////////
// initialize our map
const map = L.map('map', {
  center: [41, -69], // center map to the waters off beautiful Nauset
  zoom: 4, // set the zoom level
});
// add a baselayer to the map
const OpenStreetMap = L.tileLayer(
  'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://raw.githubusercontent.com/CartoDB/basemap-styles/master/LICENSE.md">Carto CDN</a>',
  }
).addTo(map);
// game variables
const game = {
  currentFlag: undefined,
  previousFlag: undefined,
  currentLine: undefined,
  currentMarkers: [],
  rounds: 0,
  score: 0,
  flags,
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
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function round(input) {
  // round to 2 decimal places
  return Math.round(input * 100) / 100;
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
    Math.cos(toRad(rhs.lat)) *
      Math.cos(toRad(lhs.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
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
  // Do this on the next event loop tick
  setTimeout(() => {
    const summary = `
G A M E O V E R
rounds: ${game.rounds}
score: ${game.score}

good job!
 `;
    if (alert(summary)) {
    } else {
      window.location.reload();
    }
  }, 0);
}

function updateGameState(event) {
  // move on to the next flag
  const nextFlag = popRandomFlag();
  if (!nextFlag) {
    endGame();
  } else {
    game.previousFlag = game.currentFlag;
    game.currentFlag = nextFlag;
    let elem = document.getElementById('flag-img');
    if (!elem) {
      elem = document.createElement('img');
    }
    elem.setAttribute('id', 'flag-img');
    elem.setAttribute(
      'src',
      `https://flagcdn.com/128x96/${game.currentFlag.iso.toLowerCase()}.png`
    );
    elem.setAttribute('width', '128');
    elem.setAttribute('height', '96');
    elem.setAttribute('alt', 'Flag to guess');
    document.getElementById('flag').appendChild(elem);
  }

  if (event) {
    const distance = round(haversine(event.latlng, game.previousFlag.latlng));
    if (game.currentLine) {
      game.currentLine.remove(map);
    }
    game.currentLine = L.polyline([event.latlng, game.previousFlag.latlng], {
      color: '#2a52be', // cerulean
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
    game.score = round(game.score + distance);
    game.rounds++;
    document.getElementById(
      'guess'
    ).innerText = `You were ${distance} km away from ${game.previousFlag.name}`;
    document.getElementById('rounds').innerText = `rounds: ${game.rounds}`;
    document.getElementById('score').innerText = `score: ${game.score}`;
  }
}

////////////////////
// setup the game //
////////////////////
map.on('click', updateGameState);

// let's get started!
game.currentFlag = popRandomFlag();
updateGameState();
