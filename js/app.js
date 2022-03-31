/////////////////////////////
// sketchy globals go here //
/////////////////////////////
// initialize our map
const map = L.map('map', {
  center: [41, -69], // center map to the waters off beautiful naussett
  zoom: 3 // set the zoom level
});
// add a baselayer to the map 
const OpenStreetMap = L.tileLayer('http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://raw.githubusercontent.com/CartoDB/basemap-styles/master/LICENSE.md">Carto CDN</a>'
}).addTo(map);
// game variables
const game = {
  currentFlag: undefined,
  rounds: 0,
  score: 0,
  flags: [
    {
      latlng: { lat: 59.43, lng: 24.74 },
      flag: 'images/a01829903b582d494a12522243c2830c37b8c35966076925ea57f4f1f6fee570.png',
      name: 'Tallinn, Estonia',
    },
    {
      latlng: { lat: 19.75, lng: 96.1 },
      flag: 'images/67397dcee912bf7c59b88a547182bb2f602aab6186e6998b43ef7106fac64d92.png',
      name: 'Naypyidaw, Myanmar',
    },
  ]
};

///////////////////////////////////
// global functions for the game //
///////////////////////////////////
function setFlag(input) {
  let elem = document.getElementById('flag-img');
  if (!elem) {
    elem = document.createElement('img');
  }
  elem.setAttribute('id', 'flag-img');
  elem.setAttribute('src', input.flag);
  elem.setAttribute('height', '126');
  elem.setAttribute('width', '198');
  elem.setAttribute('alt', 'Flag to guess');
  document.getElementById('flag').appendChild(elem);
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
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
good job
 `;
    if (alert(summary)) {
    } else {
      window.location.reload();
    }

  }, 0);
}

function updateGameState(event) {
  const distance = Math.round(haversine(event.latlng, game.currentFlag.latlng));
  game.score += distance;
  game.rounds++;
  document.getElementById('guess').innerText = `You were ${distance} km away`;
  document.getElementById('rounds').innerText = `rounds: ${game.rounds}`;
  document.getElementById('score').innerText = `score: ${game.score}`;
}

function toRad(input) {
  return input * Math.PI / 180;
}

function haversine(lhs, rhs) {
  const R = 6371; // radius of earth in km 
  const x1 = lhs.lat - rhs.lat;
  const dLat = toRad(x1);
  const x2 = lhs.lng - rhs.lng;
  const dLng = toRad(x2);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(rhs.lat)) * Math.cos(toRad(lhs.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const result = R * c;
  // result /= 1.60934; // miles
  return result;
}

function onMapClick(event) {
  // process the guess
  updateGameState(event);

  // move on to the next flag
  const nextFlag = popRandomFlag();
  if (!nextFlag) {
    endGame();
  } else {
    setFlag(nextFlag);
  }
}

////////////////////
// setup the game //
////////////////////
map.on('click', onMapClick);

// let's get started!
game.currentFlag = popRandomFlag();
setFlag(game.currentFlag);