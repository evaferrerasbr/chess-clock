import '../stylesheets/Clock.scss';

function Clock(props) {
  const { totalMinutes, incAfterEachPlay, playNumber, incOfMinutes } = props;

  return (
    <article className="Clock">
      <p>{totalMinutes}</p>
    </article>
  );
}

export default Clock;
