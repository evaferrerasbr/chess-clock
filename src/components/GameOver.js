import { Link } from 'react-router-dom';
import '../stylesheets/GameOver.scss';

function GameOver(props) {
  const { whiteCounter, blackCounter } = props;

  const getFallenFlag = () => {
    if (whiteCounter === 0) {
      return <p>The white player's flag falls</p>;
    } else if (blackCounter === 0) {
      return <p>The black player's flag falls</p>;
    }
  };

  return (
    <article className="GameOver">
      {getFallenFlag()}
      <Link className="ColourOptions__button--link" to="/">
        Rematch?
      </Link>
    </article>
  );
}

export default GameOver;
