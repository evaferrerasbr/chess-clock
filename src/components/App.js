import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { setLocalStorage, getFromLocalStorage } from '../services/localstorage';
import Header from './Header';
import Landing from './Landing';
import ClocksPage from './ClocksPage';
import GameOver from './GameOver';
import Footer from './Footer';
import '../stylesheets/App.scss';

//gest the info from localstorage.js and saves it in a const that will be used for app state
const dataLocal = getFromLocalStorage();

function App() {
  //STATE
  //setup
  const [totalMinutes, setTotalMinutes] = useState(dataLocal.totalMinutes);
  const [incAfterEachPlay, setIncAfterEachPlay] = useState(
    dataLocal.incAfterEachPlay
  );
  const [playNumber, setPlayNumber] = useState(dataLocal.playNumber);
  const [incOfMinutes, setIncOfMinutes] = useState(dataLocal.incOfMinutes);
  const [formIsFilled, setFormIsFilled] = useState(dataLocal.formIsFilled);
  const [whitesForLeft, setWhitesForLeft] = useState(dataLocal.whitesForLeft);
  //counters
  const [whiteCounter, setWhiteCounter] = useState(dataLocal.whiteCounter);
  const [blackCounter, setBlackCounter] = useState(dataLocal.blackCounter);
  //game
  const [afterFirstTurn, setAfterFirstTurn] = useState(
    dataLocal.afterFirstTurn
  ); //prevents an initial increment when the user press start
  const [whitesTurn, setWhitesTurn] = useState(dataLocal.whitesTurn);
  const [numberOfPlays, setNumberOfPlays] = useState(dataLocal.numberOfPlays);
  const [isStarted, setIsStarted] = useState(dataLocal.isStarted);
  const [isStopped, setIsStopped] = useState(dataLocal.isStopped);

  //HOOKS
  //disables the Next button if there is some info missing
  useEffect(() => {
    if (totalMinutes && incAfterEachPlay && playNumber && incOfMinutes) {
      setFormIsFilled(true);
    } else {
      setFormIsFilled(false);
    }
  }, [totalMinutes, incAfterEachPlay, playNumber, incOfMinutes]);

  //counters are setted in tenths of a second so it doesn't have to count a whole second each change of turns
  useEffect(() => {
    if (!isStarted) {
      setWhiteCounter(totalMinutes * 600);
      setBlackCounter(totalMinutes * 600);
    }
  }, [totalMinutes, isStarted]);

  //decreases counters using tenths of a second
  useEffect(() => {
    if (isStarted && !isStopped) {
      const interval = setInterval(() => {
        if (whitesTurn && whiteCounter > 0) {
          setWhiteCounter((whiteCounter) => whiteCounter - 1);
        } else if (!whitesTurn && blackCounter > 0) {
          setBlackCounter((blackCounter) => blackCounter - 1);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isStarted, whitesTurn, isStopped, whiteCounter, blackCounter]);

  //adds an event listener to the windows so the user can change turns by pressing any key
  useEffect(() => {
    if (isStarted) {
      const handleKeyUp = () => {
        setWhitesTurn(!whitesTurn);
        setAfterFirstTurn(true);
        setNumberOfPlays((numberOfPlays) => numberOfPlays + 1);
      };
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  });

  //adds an event listener to the windows so the user can change turns by touching the screen in a tablet or smartphone
  useEffect(() => {
    if (isStarted) {
      const handleTouchStart = () => {
        setWhitesTurn(!whitesTurn);
        setAfterFirstTurn(true);
        setNumberOfPlays((numberOfPlays) => numberOfPlays + 1);
      };
      window.addEventListener('touchstart', handleTouchStart);
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
      };
    }
  });

  //handles the increase of seconds when changing turns
  useEffect(() => {
    if (whitesTurn && afterFirstTurn && !isStopped) {
      setBlackCounter(
        (blackCounter) => blackCounter + parseInt(incAfterEachPlay * 10)
      );
    } else if (!whitesTurn && afterFirstTurn && !isStopped) {
      setWhiteCounter(
        (whiteCounter) => whiteCounter + parseInt(incAfterEachPlay * 10)
      );
    }
  }, [whitesTurn, incAfterEachPlay, afterFirstTurn, isStopped]);

  //handles the increase of minutes after n plays if the user has selected it. It compares the selected play number with the double of the value of playNumber const, which is increased each change of turns
  useEffect(() => {
    if (numberOfPlays === playNumber * 2) {
      setWhiteCounter(
        (whiteCounter) => whiteCounter + parseInt(incOfMinutes) * 600
      );
      setBlackCounter(
        (blackCounter) => blackCounter + parseInt(incOfMinutes) * 600
      );
    }
  }, [numberOfPlays, incOfMinutes, playNumber]);

  //saves info in localstorage
  useEffect(() => {
    setLocalStorage(
      totalMinutes,
      incAfterEachPlay,
      playNumber,
      incOfMinutes,
      formIsFilled,
      whitesForLeft,
      whiteCounter,
      blackCounter,
      whitesTurn,
      isStarted,
      isStopped,
      afterFirstTurn,
      numberOfPlays
    );
  });

  //EVENT HANDLERS
  //saves in state the inputs info
  const handleInputChange = (data) => {
    if (isStarted) {
      handleReset();
    } //resets all values when the user has started playing and goes back to change any input value
    if (data.name === 'totalMinutes') {
      setTotalMinutes(data.value);
    } else if (data.name === 'incAfterEachPlay') {
      setIncAfterEachPlay(data.value);
    } else if (data.name === 'playNumber') {
      setPlayNumber(data.value);
    } else if (data.name === 'incOfMinutes') {
      setIncOfMinutes(data.value);
    }
  };

  //saves in state the predefined options
  const handlePredefinedSettings = (data) => {
    handleReset(); //this reset works if the user wants to change after starting to play
    setFormIsFilled(true);
    setTotalMinutes(data.minutes);
    setIncAfterEachPlay(data.seconds);
    setPlayNumber('0');
    setIncOfMinutes('0');
  };

  //changes whitesForLeft values when the user clicks the button to change clock colours
  const handleClockColours = () => {
    setWhitesForLeft((whitesForLeft) => !whitesForLeft);
  };

  //starts the game
  const handleStart = () => {
    setIsStarted(true);
  };

  //
  const handleStop = () => {
    setAfterFirstTurn(true); //this is needed to make the increase of seconds if the user stops the play without pressing any key first
    setIsStopped(true);
    setWhitesTurn((whitesTurn) => !whitesTurn);
    setNumberOfPlays((numberOfPlays) => numberOfPlays + 1);
  };

  //continues the game after stopping it
  const handleContinue = () => {
    setIsStopped(false);
  };

  //resets all values to initial values
  const handleReset = () => {
    setTotalMinutes('');
    setIncAfterEachPlay('');
    setPlayNumber('0');
    setIncOfMinutes('0');
    setFormIsFilled(false);
    setWhitesForLeft(true);
    setIsStarted(false);
    setIsStopped(false);
    setWhitesTurn(true);
    setAfterFirstTurn(false);
    setNumberOfPlays(0);
  };

  //JSX
  return (
    <>
      <Header />
      <Switch>
        <>
          <main className="App">
            <h1 className="App__title">Chess clock</h1>
            <Route exact path="/">
              <Landing
                totalMinutes={totalMinutes}
                incAfterEachPlay={incAfterEachPlay}
                playNumber={playNumber}
                incOfMinutes={incOfMinutes}
                formIsFilled={formIsFilled}
                handleInputChange={handleInputChange}
                handlePredefinedSettings={handlePredefinedSettings}
                handleReset={handleReset}
              />
            </Route>
            <Route path="/game">
              {whiteCounter && blackCounter !== 0 ? (
                <ClocksPage
                  totalMinutes={totalMinutes}
                  incAfterEachPlay={incAfterEachPlay}
                  playNumber={playNumber}
                  incOfMinutes={incOfMinutes}
                  whiteCounter={whiteCounter}
                  blackCounter={blackCounter}
                  whitesForLeft={whitesForLeft}
                  handleClockColours={handleClockColours}
                  isStarted={isStarted}
                  isStopped={isStopped}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  handleContinue={handleContinue}
                />
              ) : (
                <GameOver
                  whiteCounter={whiteCounter}
                  blackCounter={blackCounter}
                  handleReset={handleReset}
                />
              )}
            </Route>
          </main>
        </>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
