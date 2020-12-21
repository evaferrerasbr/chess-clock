import { useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../stylesheets/WhitesLeft.scss';

function WhitesLeft(props) {
  const { totalMinutes } = props;

  const [whiteCounter, setWhiteCounter] = useState(totalMinutes * 60);
  const [blackCounter, setBlackCounter] = useState(totalMinutes * 60);

  return (
    <section className="WhitesLeft">
      <h2 className="WhitesLeft__title">
        Step 3: Start and press any key to change turns
      </h2>
      <button className="WhitesLeft__button" type="button">
        Start
      </button>
      <button className="WhitesLeft__button" type="button">
        Stop
      </button>
      <article className="WhitesLeft__clocks">
        <Clock counter={whiteCounter} />
        <Clock counter={blackCounter} />
      </article>
      <button className="WhitesLeft__button" type="button">
        <Link className="WhitesLeft__button--link" to="/colours">
          Go back
        </Link>
      </button>
    </section>
  );
}

export default WhitesLeft;
