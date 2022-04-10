import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { initializeGame, startGame } from './Game';

export function App() {
  useEffect(() => {
    initializeGame();
  });

  return (
    <div>
      <div
        className={'navbar navbar-inverse navbar-fixed-top'}
        role={'navigation'}
        id={'navbar'}
        style={{ display: 'none' }}
      >
        <div className={'col-xs-12'}>
          <div id={'flag'}></div>
        </div>
        <div className={'col-xs-6'}>
          <div id={'guess'} className={'display-value h6'}>
            Click flag's capital city
          </div>
          <button className={'btn btn-default'} id={'next-button'} disabled={true}>
            Next
          </button>
        </div>
        <div className={'col-xs-6'}>
          <div id={'total-score'} className={'display-value h6'}>
            Score: 0
          </div>
          <div id={'last-score'} className={'display-value h6'}>
            Last score: 0
          </div>
          <div id={'game-timer'} className={'display-value h6'}>
            Time left: 120 seconds
          </div>
        </div>
      </div>
      <div id={'start-end-game'}>
        <span className={'h3'}>F L A G G A M E</span>
        <div className={'preamble h6'}>
          To play the game, click as close as possible to the capital city of the country whose flag is displayed.
        </div>
        <p />
        <div className={'preamble h6'}>
          Your score is calculated based on how close you are, as long as your guess is within 1000 km. Bonus points for
          guessing quickly.
        </div>
        <p />
        <div className={'preamble h6'}>
          You have 2 minutes of guessing time. The clock stops between each guess until you hit the "next" button.
        </div>
        <p />
        <div className={'preamble h6'}>Click the button to start the game. Good luck!</div>
        <p />
        <button className={'btn btn-default btn-lg'} onClick={startGame}>
          Start
        </button>
      </div>
      <div id={'container'}>
        <div id={'map'} style={{ display: 'none' }}></div>
        <script src={'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/leaflet.js'}></script>
        <script src={'js/flags.js'}></script>
        <script src={'js/emoji.js'}></script>
        <script src={'js/app.js'}></script>
      </div>
    </div>
  );
}
