import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../stylesheets/ClocksPage.scss';

function ClocksPage(props) {
  const { whiteCounter, blackCounter, whitesForLeft } = props;

  return (
    <section className="ClocksPage">
      <h2 className="ClocksPage__title">
        Step 3: Start and press any key to change turns
      </h2>
      <button className="ClocksPage__button" type="button">
        Start
      </button>
      <button className="ClocksPage__button" type="button">
        Stop
      </button>
      <article className="ClocksPage__clocks">
        <Clock
          counter={whiteCounter}
          colour={whitesForLeft ? 'white' : 'black'}
        />
        <Clock
          counter={blackCounter}
          colour={whitesForLeft ? 'black' : 'white'}
        />
      </article>
      <button className="ClocksPage__button" type="button">
        <Link className="ClocksPage__button--link" to="/colours">
          Go back
        </Link>
      </button>
    </section>
  );
}

export default ClocksPage;
