import { Link } from 'react-router-dom';
import '../stylesheets/SetupForm.scss';

function SetupForm(props) {
  const { isClicked, handleInputChange } = props;

  const data = {
    totalMinutes: '',
    incAfterEachPlay: '',
    playNumber: '',
    incOfMinutes: '',
  };

  const handleChange = (ev) => {
    const key = ev.currentTarget.id;
    const value = ev.currentTarget.value;
    data[key] = value;
    handleInputChange(data);
  };

  return (
    <form>
      <label htmlFor="totalMinutes">Minutes for each player</label>
      <input
        id="totalMinutes"
        type="text"
        name="totalMinutes"
        onChange={handleChange}
      />
      <label htmlFor="incAfterEachPlay">
        Increment after each play (seconds)
      </label>
      <input
        id="incAfterEachPlay"
        type="text"
        name="incAfterEachPlay"
        onChange={handleChange}
      />
      <label htmlFor="playNumber">After play...</label>
      <input
        id="playNumber"
        type="text"
        name="playNumber"
        onChange={handleChange}
      />
      <label htmlFor="incOfMinutes">increment...</label>
      <input
        id="incOfMinutes"
        type="text"
        name="incOfMinutes"
        onChange={handleChange}
      />
      <p className="SetupForm__paragraph">minutes</p>
      {isClicked ? (
        <button type="button">
          <Link to="/colours">Next</Link>
        </button>
      ) : (
        <button type="button" disabled>
          Next
        </button>
      )}
    </form>
  );
}

export default SetupForm;
