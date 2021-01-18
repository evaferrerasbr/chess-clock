import '../stylesheets/Clock.scss';

function Clock(props) {
  const { counter, colour } = props;

  return (
    <article
      className={`Clock ${
        colour === 'white' ? 'Clock--white' : 'Clock--black'
      }`}
    >
      <div className="Clock__screen">
        {counter % 600 < 100 ? (
          <p className="Clock__numbers">
            {Math.floor(counter / 600)}:{`0${Math.floor(counter / 10) % 60}`}
          </p>
        ) : (
          <p className="Clock__numbers">
            {Math.floor(counter / 600)}:{Math.floor(counter / 10) % 60}
          </p>
        )}
      </div>
    </article>
  );
}

export default Clock;
