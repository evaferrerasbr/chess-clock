import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Clock from './Clock';
import arrows from '../images/arrows.svg';
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
        Press any key or touch the screen to change
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
      <button className="ClocksPage__button" type="button">
        <Link className="ClocksPage__button--link" to="/">
          Go back
        </Link>
      </button>
    </section>
  );
}

ClocksPage.propTypes = {
  whiteCounter: PropTypes.number,
  blackCounter: PropTypes.number,
  whitesForLeft: PropTypes.bool,
  handleClockColours: PropTypes.func,
  isStarted: PropTypes.bool,
  isStopped: PropTypes.bool,
  handleStart: PropTypes.func,
  handleStop: PropTypes.func,
  handleContinue: PropTypes.func,
};

export default ClocksPage;
