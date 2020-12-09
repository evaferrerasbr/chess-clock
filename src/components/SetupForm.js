import { Link } from 'react-router-dom';
import '../stylesheets/SetupForm.scss';

function SetupForm() {
  return (
    <form>
      <label for="totalMinutes">Minutes for each player</label>
      <input id="totalMinutes" type="text" name="totalMinutes" />
      <label for="incAfterEachPlay">Increment after each play (seconds)</label>
      <input id="incAfterEachPlay" type="text" name="incAfterEachPlay" />
      <label for="playNumber">After play...</label>
      <input id="playNumber" type="text" name="playNumber" />
      <label for="incOfMinutes">increment...</label>
      <input id="incOfMinutes" type="text" name="incOfMinutes" />
      <p className="SetupForm__paragraph">minutes</p>
      <Link to="/colours">Next</Link>
    </form>
  );
}

export default SetupForm;
