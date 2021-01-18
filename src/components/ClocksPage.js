import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../stylesheets/ClocksPage.scss';

function ClocksPage(props) {
  const {
    whiteCounter,
    blackCounter,
    whitesForLeft,
    handleClockColours,
    isStarted,
    isStopped,
    handleStart,
    handleStop,
    handleContinue,
  } = props;

  const handleMouseDown = () => {
    if (!isStarted) {
      handleStart();
    } else if (isStarted && !isStopped) {
      handleStop();
    } else if (isStarted && isStopped) {
      handleContinue();
    }
  };

  const changeButtons = () => {
    if (!isStarted) {
      return (
        <button
          className="ClocksPage__button"
          type="button"
          onMouseDown={handleMouseDown}
        >
          Start
        </button>
      );
    } else if (isStarted && !isStopped) {
      return (
        <button
          className="ClocksPage__button"
          type="button"
          onMouseDown={handleMouseDown}
        >
          Stop
        </button>
      );
    } else if (isStarted && isStopped) {
      return (
        <button
          className="ClocksPage__button"
          type="button"
          onMouseDown={handleMouseDown}
        >
          Continue
        </button>
      );
    }
  };

  const handleClick = () => {
    handleClockColours();
  };

  return (
    <section className="ClocksPage">
      <h2 className="ClocksPage__title">
        Step 3: Start and press any key to change turns
      </h2>
      <button onClick={handleClick}>Change colours</button>
      {changeButtons()}
      <article className="ClocksPage__clocks">
        <Clock
          counter={whitesForLeft ? whiteCounter : blackCounter}
          colour={whitesForLeft ? 'white' : 'black'}
        />
        <Clock
          counter={whitesForLeft ? blackCounter : whiteCounter}
          colour={whitesForLeft ? 'black' : 'white'}
        />
      </article>
      <button className="ClocksPage__button" type="button">
        <Link className="ClocksPage__button--link" to="/">
          Go back
        </Link>
      </button>
    </section>
  );
}

export default ClocksPage;
