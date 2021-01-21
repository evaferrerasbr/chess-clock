import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import timeout from '../images/timeout.gif';
import '../stylesheets/GameOver.scss';

function GameOver(props) {
  const { whiteCounter, blackCounter, handleReset } = props;

  const handleClick = () => {
    handleReset();
  };

  const getFallenFlag = () => {
    if (whiteCounter === 0) {
      return <p className="GameOver__text">The white player's flag falls</p>;
    } else if (blackCounter === 0) {
      return <p className="GameOver__text">The black player's flag falls</p>;
    }
  };

  return (
    <article className="GameOver">
      {getFallenFlag()}
      <img className="GameOver__img" src={timeout} alt="The time is out" />
      <button className="GameOver__button" onClick={handleClick}>
        <Link className="GameOver__button--link" to="/">
          Rematch?
        </Link>
      </button>
    </article>
  );
}

GameOver.propTypes = {
  whiteCounter: PropTypes.number,
  blackCounter: PropTypes.number,
  handleReset: PropTypes.func,
};

export default GameOver;
