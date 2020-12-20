import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../stylesheets/WhitesLeft.scss';

function WhitesLeft(props) {
  const { totalMinutes, incAfterEachPlay, playNumber, incOfMinutes } = props;

  return (
    <section className="WhitesLeft">
      <h2 className="WhitesLeft__title">
        Step 3: Start and press any key to change turns
      </h2>
      <article className="WhitesLeft__clocks">
        <Clock
          totalMinutes={parseInt(totalMinutes)}
          incAfterEachPlay={parseInt(incAfterEachPlay)}
          playNumber={parseInt(playNumber)}
          incOfMinutes={parseInt(incOfMinutes)}
        />
        <Clock
          totalMinutes={parseInt(totalMinutes)}
          incAfterEachPlay={parseInt(incAfterEachPlay)}
          playNumber={parseInt(playNumber)}
          incOfMinutes={parseInt(incOfMinutes)}
        />
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
