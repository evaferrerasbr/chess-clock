import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { setLocalStorage, getFromLocalStorage } from '../services/localstorage';
import Header from './Header';
import Landing from './Landing';
import ColourOptions from './ColourOptions';
import ClocksPage from './ClocksPage';
import GameOver from './GameOver';
import Footer from './Footer';
import '../stylesheets/App.scss';

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
  );
  const [whitesTurn, setWhitesTurn] = useState(dataLocal.whitesTurn);
  const [numberOfPlays, setNumberOfPlays] = useState(dataLocal.numberOfPlays);
  const [isStarted, setIsStarted] = useState(dataLocal.isStarted);
  const [isStopped, setIsStopped] = useState(dataLocal.isStopped);

  //HOOKS
  useEffect(() => {
    if (totalMinutes && incAfterEachPlay && playNumber && incOfMinutes) {
      setFormIsFilled(true);
    } else {
      setFormIsFilled(false);
    }
  }, [totalMinutes, incAfterEachPlay, playNumber, incOfMinutes]);

  useEffect(() => {
    if (!isStarted) {
      setWhiteCounter(totalMinutes * 600);
      setBlackCounter(totalMinutes * 600);
    }
  }, [totalMinutes, isStarted]);

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
  const handleInputChange = (data) => {
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

  const handlePredefinedSettings = (data) => {
    setTotalMinutes(data.minutes);
    setIncAfterEachPlay(data.seconds);
    setPlayNumber('0');
    setIncOfMinutes('0');
  };

  const handleColourOptions = (selectedClock) => {
    if (selectedClock === 'left') {
      setWhitesForLeft(true);
    } else {
      setWhitesForLeft(false);
    }
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleStop = () => {
    setWhitesTurn(!whitesTurn);
    setIsStopped(true);
    setNumberOfPlays((numberOfPlays) => numberOfPlays + 1);
  };

  const handleContinue = () => {
    setIsStopped(false);
  };

  const handleReset = () => {
    setTotalMinutes('');
    setIncAfterEachPlay('');
    setPlayNumber('');
    setIncOfMinutes('');
    setFormIsFilled(false);
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
            <Route path="/colours">
              <ColourOptions handleColourOptions={handleColourOptions} />
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
