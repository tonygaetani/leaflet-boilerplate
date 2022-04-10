import EmojiConvertor from 'emoji-js';
import { LatLng, Marker, Polyline } from 'leaflet';
import { Capital, Flag } from './Flags';

export type Guess = {
  iso: string;
  capital: Capital;
  distance: number;
  score: number;
};

export type Score = {
  total: number;
  last: number;
  best: number;
  worst: number;
  avg: number;
  bonus: number;
};

export type GameState = {
  currentFlag: Flag;
  previousFlag: Flag;
  lastCapital: Capital;
  lastDistance: number;
  currentLine: Polyline | undefined;
  currentMarkers: Marker[];
  guesses: Guess[];
  rounds: number;
  score: Score;
  flags: Flag[];
  pause: boolean;
  over: boolean;
  secondsLeft: number;
  roundStartedAt: Date | undefined;
};

export function shuffle(array: unknown[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
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

export function round(input: number) {
  // round to 2 decimal places
  return Math.round(input * 100) / 100;
}

export function calculateScore(
  distance: number,
  roundStartedAt: Date | undefined
) {
  let score = 0;
  if (distance > 1000) {
    return score;
  }

  // check if the guess was < 5 seconds
  if (roundStartedAt) {
    const guessDuration = new Date().getTime() - roundStartedAt.getTime();
    if (guessDuration < 5 * 1000) {
      score += (5000 - guessDuration) * 2; // bonus points for fast guesses
    }
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

export function toRad(input: number) {
  return (input * Math.PI) / 180;
}

export function haversine(
  lhs: Pick<LatLng, 'lat' | 'lng'>,
  rhs: Pick<LatLng, 'lat' | 'lng'>
) {
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

const emoji = new EmojiConvertor();
emoji.replace_mode = 'unified';
emoji.allow_native = true;
export function getFlagEmoji(iso: string) {
  return emoji.replace_colons(`:flag-${iso.toLowerCase()}:`);
}
