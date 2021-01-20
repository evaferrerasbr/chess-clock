import { Link } from 'react-router-dom';
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
      <button className="GameOver__button" onClick={handleClick}>
        <Link className="GameOver__button--link" to="/">
          Rematch?
        </Link>
      </button>
    </article>
  );
}

export default GameOver;
