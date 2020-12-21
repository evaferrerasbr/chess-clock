import '../stylesheets/Clock.scss';

function Clock(props) {
  const { counter } = props;

  return (
    <article className="Clock">
      {counter % 60 < 10 ? (
        <p className="Clock__numbers">
          {Math.floor(counter / 60)}:{`0${counter % 60}`}
        </p>
      ) : (
        <p>
          {Math.floor(counter / 60)}:{counter % 60}
        </p>
      )}
    </article>
  );
}

export default Clock;
