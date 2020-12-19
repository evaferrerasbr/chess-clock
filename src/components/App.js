import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import ColourOptions from './ColourOptions';
import WhitesLeft from './WhitesLeft';
import WhitesRight from './WhitesRight';
import Footer from './Footer';
import '../stylesheets/App.scss';

function App() {
  const [totalMinutes, setTotalMinutes] = useState('');
  const [incAfterEachPlay, setIncAfterEachPlay] = useState('');
  const [playNumber, setPlayNumber] = useState('');
  const [incOfMinutes, setIncOfMinutes] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (totalMinutes && incAfterEachPlay && playNumber && incOfMinutes) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [totalMinutes, incAfterEachPlay, playNumber, incOfMinutes]);

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

  const handleReset = () => {
    setTotalMinutes('');
    setIncAfterEachPlay('');
    setPlayNumber('');
    setIncOfMinutes('');
    setIsClicked(false);
  };

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
              <ColourOptions />
            </Route>
            <Route path="/whites-left">
              <WhitesLeft />
            </Route>
            <Route path="/whites-right">
              <WhitesRight />
            </Route>
          </main>
        </>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
