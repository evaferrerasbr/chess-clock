import '../stylesheets/Clock.scss';

function Clock(props) {
  const { counter, colour } = props;

  const selectCounter = () => {
    if (counter > 200) {
      if (counter % 600 < 100) {
        return (
          <p className="Clock__numbers">
            {Math.floor(counter / 600)}:{`0${Math.floor(counter / 10) % 60}`}
          </p>
        );
      } else {
        return (
          <p className="Clock__numbers">
            {Math.floor(counter / 600)}:{Math.floor(counter / 10) % 60}
          </p>
        );
      }
    } else {
      return (
        <p className="Clock__numbers">
          {Math.floor(counter / 10) % 60}.{counter % 10}
        </p>
      );
    }
  };

  return (
    <article
      className={`Clock ${
        colour === 'white' ? 'Clock--white' : 'Clock--black'
      }`}
    >
      <div className="Clock__screen">{selectCounter()}</div>
    </article>
  );
}

export default Clock;
