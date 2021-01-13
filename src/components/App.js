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
  const [totalMinutes, setTotalMinutes] = useState('');
  const [incAfterEachPlay, setIncAfterEachPlay] = useState('');
  const [playNumber, setPlayNumber] = useState('');
  const [incOfMinutes, setIncOfMinutes] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [whiteCounter, setWhiteCounter] = useState(0);
  const [blackCounter, setBlackCounter] = useState(0);
  const [whitesForLeft, setWhitesForLeft] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [whitesTurn, setWhitesTurn] = useState(true);
  const [isStopped, setIsStopped] = useState(false);

  //HOOKS
  useEffect(() => {
    if (totalMinutes && incAfterEachPlay && playNumber && incOfMinutes) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [totalMinutes, incAfterEachPlay, playNumber, incOfMinutes]);

  useEffect(() => {
    if (!isStarted) {
      setWhiteCounter(totalMinutes * 60);
      setBlackCounter(totalMinutes * 60);
    }
  }, [totalMinutes, isStarted]);

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => {
        if (whitesTurn && !isStopped) {
          setWhiteCounter((whiteCounter) => whiteCounter - 1);
        } else if (!whitesTurn && !isStopped) {
          setBlackCounter((blackCounter) => blackCounter - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isStarted, whitesTurn, isStopped]);

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

  const handleReset = () => {
    setTotalMinutes('');
    setIncAfterEachPlay('');
    setPlayNumber('');
    setIncOfMinutes('');
    setIsClicked(false);
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
                isClicked={isClicked}
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
                handleStart={handleStart}
                handleStop={handleStop}
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
