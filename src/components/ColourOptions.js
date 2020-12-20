import { Link } from 'react-router-dom';
import '../stylesheets/ColourOptions.scss';

function ColourOptions() {
  return (
    <section className="ColourOptions">
      <h2 className="ColourOptions__title">Step 2: Who plays with whites?</h2>
      <article className="ColourOptions__wrapper">
        <button
          className="ColourOptions__button ColourOptions__button--left"
          type="button"
        >
          <Link className="ColourOptions__button--link" to="/whites-left">
            Left player
          </Link>
        </button>
        <button
          className="ColourOptions__button ColourOptions__button--right"
          type="button"
        >
          <Link className="ColourOptions__button--link" to="/whites-right">
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
