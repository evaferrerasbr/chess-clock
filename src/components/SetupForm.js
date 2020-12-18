import { Link } from 'react-router-dom';
import InputTotalMinutes from './InputTotalMinutes';
import InputIncAfterEachPlay from './InputIncAfterEachPlay';
import InputPlayNumber from './InputPlayNumber';
import InputIncOfMinutes from './InputIncOfMinutes';
import '../stylesheets/SetupForm.scss';

function SetupForm(props) {
  const {
    totalMinutes,
    incAfterEachPlay,
    playNumber,
    incOfMinutes,
    isClicked,
    handleInputChange,
    handleReset,
  } = props;

  const handleClick = () => {
    handleReset();
  };

  return (
    <form>
      <InputTotalMinutes
        totalMinutes={totalMinutes}
        handleInputChange={handleInputChange}
      />
      <InputIncAfterEachPlay
        incAfterEachPlay={incAfterEachPlay}
        handleInputChange={handleInputChange}
      />
      <InputPlayNumber
        playNumber={playNumber}
        handleInputChange={handleInputChange}
      />
      <InputIncOfMinutes
        incOfMinutes={incOfMinutes}
        handleInputChange={handleInputChange}
      />
      {isClicked ? (
        <button type="button">
          <Link to="/colours">Next</Link>
        </button>
      ) : (
        <button type="button" disabled>
          Next
        </button>
      )}
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </form>
  );
}

export default SetupForm;
