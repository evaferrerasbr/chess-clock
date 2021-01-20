import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../stylesheets/ClocksPage.scss';
import arrows from '../images/arrows.png';

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
          className="ClocksPage__button ClocksPage__button--start"
          type="button"
          onMouseDown={handleMouseDown}
        >
          Start
        </button>
      );
    } else if (isStarted && !isStopped) {
      return (
        <button
          className="ClocksPage__button ClocksPage__button--stop"
          type="button"
          onMouseDown={handleMouseDown}
        >
          Stop
        </button>
      );
    } else if (isStarted && isStopped) {
      return (
        <button
          className="ClocksPage__button ClocksPage__button--start"
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
        Start and press any key to change turns
      </h2>
      {changeButtons()}
      <img
        className="ClocksPage__img"
        src={arrows}
        alt="Change colours"
        onClick={handleClick}
      />
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
      <button
        className="ClocksPage__button ClocksPage__button--goback"
        type="button"
      >
        <Link className="ClocksPage__button--link" to="/">
          Go back
        </Link>
      </button>
    </section>
  );
}

export default ClocksPage;
