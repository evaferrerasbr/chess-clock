import PropTypes from 'prop-types';
import InputTotalMinutes from './InputTotalMinutes';
import InputIncAfterEachPlay from './InputIncAfterEachPlay';
import InputPlayNumber from './InputPlayNumber';
import InputIncOfMinutes from './InputIncOfMinutes';
import '../../stylesheets/SetupForm.scss';

function SetupForm(props) {
  const {
    totalMinutes,
    incAfterEachPlay,
    playNumber,
    incOfMinutes,
    handleInputChange,
    handleReset,
  } = props;

  const handleClick = () => {
    handleReset();
  };

  return (
    <>
      <form className="SetupForm">
        <h3 className="SetupForm__title">Personalize your game</h3>
        <div className="SetupForm__wrapper SetupForm__wrapper--up">
          <InputTotalMinutes
            totalMinutes={totalMinutes}
            handleInputChange={handleInputChange}
          />
          <InputIncAfterEachPlay
            incAfterEachPlay={incAfterEachPlay}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="SetupForm__wrapper SetupForm__wrapper--down">
          <InputPlayNumber
            playNumber={playNumber}
            handleInputChange={handleInputChange}
          />
          <InputIncOfMinutes
            incOfMinutes={incOfMinutes}
            handleInputChange={handleInputChange}
          />
        </div>
        <button
          className="SetupForm__button SetupForm__button--reset"
          type="button"
          onClick={handleClick}
        >
          Reset
        </button>
      </form>
    </>
  );
}

SetupForm.propTypes = {
  totalMinutes: PropTypes.string,
  incAfterEachPlay: PropTypes.string,
  playNumber: PropTypes.string,
  incOfMinutes: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleReset: PropTypes.func,
};

export default SetupForm;
