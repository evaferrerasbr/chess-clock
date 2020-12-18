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

  const handleInputChange = (data) => {
    setTotalMinutes(data.totalMinutes);
    setIncAfterEachPlay(data.setIncAfterEachPlay);
    setPlayNumber(data.setPlayNumber);
    setIncOfMinutes(data.setIncOfMinutes);
  };

  return (
    <>
      <Header />
      <Switch>
        <main className="App">
          <Route exact path="/">
            <Landing
              totalMinutes={totalMinutes}
              incAfterEachPlay={incAfterEachPlay}
              playNumber={playNumber}
              incOfMinutes={incOfMinutes}
              isClicked={isClicked}
              handleInputChange={handleInputChange}
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
      </Switch>
      <Footer />
    </>
  );
}

export default App;
