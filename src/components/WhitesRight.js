import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../stylesheets/WhitesRight.scss';

function WhitesRight(props) {
  const { totalMinutes, incAfterEachPlay, playNumber, incOfMinutes } = props;

  return (
    <section className="WhitesRight">
      <h2 className="WhitesRight__title">
        Step 3: Start and press any key to change turns
      </h2>
      <article className="WhitesRight__clocks">
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
      <button className="WhitesRight__button" type="button">
        <Link className="WhitesRight__button--link" to="/colours">
          Go back
        </Link>
      </button>
    </section>
  );
}

export default WhitesRight;
