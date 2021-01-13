import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import ColourOptions from './ColourOptions';
import ClocksPage from './ClocksPage';
import Footer from './Footer';
import '../stylesheets/App.scss';

function App() {
  //STATE
  //setup
  const [totalMinutes, setTotalMinutes] = useState('');
  const [incAfterEachPlay, setIncAfterEachPlay] = useState('');
  const [playNumber, setPlayNumber] = useState('');
  const [incOfMinutes, setIncOfMinutes] = useState('');
  const [formIsFilled, setFormIsFilled] = useState(false);
  const [whitesForLeft, setWhitesForLeft] = useState(false);
  //counters
  const [whiteCounter, setWhiteCounter] = useState(0);
  const [blackCounter, setBlackCounter] = useState(0);
  //game
  const [whitesTurn, setWhitesTurn] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isContinued, setIsContinued] = useState(false);

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
      setWhiteCounter(totalMinutes * 60);
      setBlackCounter(totalMinutes * 60);
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
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isStarted, whitesTurn, isStopped, whiteCounter, blackCounter]);

  useEffect(() => {
    if (isStarted) {
      const handleKeyUp = () => {
        setWhitesTurn(!whitesTurn);
      };
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
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
  };

  const handleContinue = () => {
    setIsContinued(true);
  };

  const handleReset = () => {
    setTotalMinutes('');
    setIncAfterEachPlay('');
    setPlayNumber('');
    setIncOfMinutes('');
    setFormIsFilled(false);
    setIsStarted(false);
    setWhitesTurn(true);
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
            </Route>
          </main>
        </>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
