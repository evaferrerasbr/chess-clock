import { Link } from 'react-router-dom';

function ColourOptions() {
  return (
    <section>
      <p>Who plays with whites?</p>
      <article>
        <Link to="/whites-left">Left player</Link>
      </article>
      <article>
        <Link to="/whites-right">Right player</Link>
      </article>
      <Link to="/">Go back</Link>
    </section>
  );
}

export default ColourOptions;
