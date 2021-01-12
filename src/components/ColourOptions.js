import { Link } from 'react-router-dom';
import '../stylesheets/ColourOptions.scss';

function ColourOptions(props) {
  const { handleColourOptions } = props;

  const handleClick = (ev) => {
    const selectedClock = ev.currentTarget.id;
    handleColourOptions(selectedClock);
  };

  return (
    <section className="ColourOptions">
      <h2 className="ColourOptions__title">Step 2: Who plays with whites?</h2>
      <article className="ColourOptions__wrapper">
        <button
          className="ColourOptions__button ColourOptions__button--left"
          type="button"
          id="left"
          onClick={handleClick}
        >
          <Link className="ColourOptions__button--link" to="/game">
            Left player
          </Link>
        </button>
        <button
          className="ColourOptions__button ColourOptions__button--right"
          type="button"
          id="right"
          onClick={handleClick}
        >
          <Link className="ColourOptions__button--link" to="/game">
            Right player
          </Link>
        </button>
      </article>
      <button
        className="ColourOptions__button ColourOptions__button--goback"
        type="button"
      >
        <Link className="ColourOptions__button--link" to="/">
          Go back
        </Link>
      </button>
    </section>
  );
}

export default ColourOptions;
