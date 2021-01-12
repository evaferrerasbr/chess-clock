import { useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../stylesheets/WhitesRight.scss';

function WhitesRight(props) {
  const { totalMinutes } = props;

  const [whiteCounter, setWhiteCounter] = useState(totalMinutes * 60);
  const [blackCounter, setBlackCounter] = useState(totalMinutes * 60);

  return (
    <section className="WhitesRight">
      <h2 className="WhitesRight__title">
        Step 3: Start and press any key to change turns
      </h2>
      <button className="WhitesRight__button" type="button">
        Start
      </button>
      <button className="WhitesRight__button" type="button">
        Stop
      </button>
      <article className="WhitesRight__clocks">
        <Clock counter={whiteCounter} colour="black" />
        <Clock counter={blackCounter} colour="white" />
      </article>
      <button className="WhitesRight__button" type="button">
        <Link className="WhitesRight__button--link" to="/colours">
          Go back
        </Link>
      </button>
    </section>
  );
}

export default WhitesRight;
