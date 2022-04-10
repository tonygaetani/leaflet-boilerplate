import React from 'react';
import L, { LeafletMouseEvent } from 'leaflet';
import { Capital, Flag, flags } from '../Flags';
import {
  calculateScore,
  GameState,
  getFlagEmoji,
  haversine,
  round,
  shuffle,
} from '../Game';
import { MapConsumer, MapContainer, TileLayer } from 'react-leaflet';

type Props = {};
type State = {
  height: number;
  gameState: GameState;
};
export class Game extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const eesti = flags.find((f) =>
      f.capitals.some((c) => c.name.includes('Tallinn'))
    )!;

    this.state = {
      height: window.innerHeight,
      gameState: {
        currentFlag: eesti,
        previousFlag: eesti,
        lastCapital: eesti.capitals[0],
        lastDistance: Number.POSITIVE_INFINITY,
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
          bonus: 0,
        },
        flags,
        pause: true,
        over: false,
        secondsLeft: 2 * 60, // 2 minutes
        roundStartedAt: undefined,
      },
    };
  }

  render() {
    let content: JSX.Element;
    if (this.state.gameState.over) {
      // game over
      let bonus = <span></span>;
      if (this.state.gameState.score.bonus > 0) {
        bonus = (
          <p className="h3">BONUS POINTS: {this.state.gameState.score.bonus}</p>
        );
      }

      content = (
        <div id="end-game-content">
          <div id="end-game">
            <p className="h3">G A M E O V E R</p>
            <div id="results" className="display-value h6">
              Rounds: {this.state.gameState.rounds}
            </div>
            <div id="score" className="display-value h6">
              Total score: {this.state.gameState.score.total}
            </div>
            {bonus}
            <div id="best-score" className="display-value h6">
              Best score: {this.state.gameState.score.best}
            </div>
            <div id="worst-score" className="display-value h6">
              Worst score: {this.state.gameState.score.worst}
            </div>
            <div id="avg-score" className="display-value h6">
              Average score: {this.state.gameState.score.avg}
            </div>
            <div className="results h6">Guesses:</div>
            {this.state.gameState.guesses
              .map(
                (g) =>
                  `<div className="display-value h6">${getFlagEmoji(g.iso)} ${
                    g.capital.name
                  }: ${g.score} (${g.distance} km)</div>`
              )
              .join('')}
          </div>
          <p />
          <button
            className="btn btn-default btn-lg"
            onClick={() => window.location.reload()}
          >
            Start Over
          </button>
        </div>
      );
    } else if (this.state.gameState.roundStartedAt) {
      // game has started
      const text =
        this.state.gameState.guesses.length > 0
          ? `You were ${this.state.gameState.lastDistance} km away from ${this.state.gameState.lastCapital.name}`
          : `Click the flag's capital city`;
      content = (
        <div>
          <img
            id="flag-img"
            className="img-responsive"
            src={`https://flagcdn.com/256x192/${
              this.state.gameState?.currentFlag.iso.toLowerCase() ?? 'EE'
            }.png`}
            alt="Flag to guess"
            width="256"
            height="192"
          ></img>
          <div className="h6">{text}</div>
          <div>
            <div id="total-score" className="display-value h6">
              Total score: {this.state.gameState?.score.total ?? 0}
            </div>
            <div id="last-score" className="display-value h6">
              Last score: {this.state.gameState?.score.last ?? 0}
            </div>
            <div id="game-timer" className="display-value h6">
              Time left: {this.state.gameState?.secondsLeft ?? 120} seconds
            </div>
          </div>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => this.onNext()}
            disabled={!this.state.gameState.pause}
          >
            Next
          </button>
        </div>
      );
    } else {
      // game has not started
      content = (
        <div>
          <p className="h6">
            {
              'To play the game, click as close as possible to the capital city of the country whose flag is displayed.'
            }
          </p>
          <br />
          <p className="h6">
            {
              'Your score is calculated based on how close you are, as long as your guess is within 1000 km. Bonus points for guessing quickly.'
            }
          </p>
          <br />
          <p className="h6">
            {
              'You have 2 minutes of guessing time. The clock stops between each guess until you hit the "next" button.'
            }
          </p>
          <p className="h6">
            {'Click the button to start the game. Good luck!'}
          </p>
          <button
            id={'game-btn'}
            className={'btn btn-primary btn-lg'}
            onClick={() => this.startGame()}
          >
            Start Game
          </button>
        </div>
      );
    }

    return (
      <div id="container">
        <div
          className="navbar navbar-inverse navbar-fixed-top"
          role="navigation"
          id="navbar"
        >
          {content}
        </div>
        <div>
          <MapContainer
            className="map"
            center={[41, -69]} // center map to the waters off beautiful Nauset
            zoom={4}
            worldCopyJump={true}
            style={{ height: this.state.height }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              subdomains="abcd"
              maxZoom={20}
            />
            <MapConsumer>
              {(map) => {
                map.on('click', this.updateGameState(map));
                return null;
              }}
            </MapConsumer>
          </MapContainer>
        </div>
      </div>
    );
  }

  private onNext() {
    for (const marker of this.state.gameState.currentMarkers) {
      marker.remove();
    }

    if (this.state.gameState.currentLine) {
      this.state.gameState.currentLine.remove();
    }

    // move on to the next flag
    shuffle(flags);
    const previousFlag = this.state.gameState.currentFlag;
    const currentFlag = flags.pop();
    if (!currentFlag) {
      this.endGame();
    } else {
      this.setState({
        height: window.innerHeight,
        gameState: {
          ...this.state.gameState,
          currentFlag,
          previousFlag,
          pause: false,
          roundStartedAt: new Date(),
          currentMarkers: [],
        },
      });
    }
  }

  private endGame() {
    // Bonus points for lots of guesses in the time allowed
    let bonus = 0;
    if (this.state.gameState.guesses.length > 35) {
      bonus = 25000;
    }

    this.setState({
      height: window.innerHeight,
      gameState: {
        ...this.state.gameState,
        over: true,
        score: {
          ...this.state.gameState.score,
          bonus,
          total: this.state.gameState.score.total + bonus,
        },
      },
    });
  }

  private updateGameState(map: L.Map) {
    return (event: LeafletMouseEvent) => {
      // do not handle events when game is paused
      if (!this.state.gameState.pause) {
        let distance = Number.POSITIVE_INFINITY;
        let capital: Capital;
        for (const capitalToCheck of this.state.gameState.previousFlag
          ?.capitals || []) {
          const distanceFromCapital = round(
            haversine(event.latlng, capitalToCheck.latlng)
          );
          if (distanceFromCapital < this.state.gameState.lastDistance) {
            distance = distanceFromCapital;
            capital = capitalToCheck;
          }
        }
        // assume nothing is greater than everything
        capital = capital!;
        const score = calculateScore(
          distance,
          this.state.gameState.roundStartedAt
        );

        // update the map

        const currentMarkers: L.Marker[] = [];
        let currentLine: L.Polyline | undefined = undefined;
        if (map) {
          currentLine = L.polyline([event.latlng, capital.latlng], {
            color: '#007BA7', // cerulean
            weight: 0.5,
            opacity: 50,
          }).addTo(map);
          // guess marker
          currentMarkers.push(
            L.marker([event.latlng.lat, event.latlng.lng], {
              icon: new L.DivIcon({
                className: 'previous-guess-icon',
                html: `<span class="previous-guess-span">Your Guess</span>`,
              }),
            }).addTo(map)
          );
          // answer marker
          currentMarkers.push(
            L.marker([capital.latlng.lat, capital.latlng.lng], {
              icon: new L.DivIcon({
                className: 'previous-answer-icon',
                html: `<span class="previous-answer-span">${capital.name}</span>`,
              }),
            }).addTo(map)
          );
        }
        this.setState({
          height: window.innerHeight,
          gameState: {
            ...this.state.gameState,
            // pause the game until the "next" button is pressed
            pause: true,
            lastDistance: distance,
            lastCapital: capital,
            score: {
              last: score,
              total: this.state.gameState.score.total + score,
              best:
                this.state.gameState.score.best < score
                  ? score
                  : this.state.gameState.score.best,
              worst:
                this.state.gameState.score.worst > score
                  ? score
                  : this.state.gameState.score.worst,
              avg: round(
                this.state.gameState.guesses.reduce(
                  (acc, guess) => acc + guess.score,
                  0
                ) / this.state.gameState.guesses.length
              ),
              bonus: 0,
            },
            rounds: this.state.gameState.rounds + 1,
            currentLine,
            currentMarkers,
          },
        });
      }
    };
  }

  private startGame() {
    // start the timer
    const gameTimerInterval = setInterval(() => {
      if (!this.state.gameState.pause) {
        this.setState({
          height: window.innerHeight,
          gameState: {
            ...this.state.gameState,
            secondsLeft: this.state.gameState.secondsLeft - 1,
          },
        });

        if (this.state.gameState.secondsLeft <= 0) {
          clearInterval(gameTimerInterval);
          this.endGame();
        }
      }
    }, 1000);

    // let's get started!
    shuffle(flags);
    this.setState({
      height: window.innerHeight,
      gameState: {
        ...this.state.gameState,
        pause: false,
        roundStartedAt: new Date(),
        currentFlag: flags.pop()!,
      },
    });
    return undefined;
  }
}
