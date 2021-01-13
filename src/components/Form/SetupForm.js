import { Link } from 'react-router-dom';
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
    formIsFilled,
    handleInputChange,
    handleReset,
  } = props;

  const handleClick = () => {
    handleReset();
  };

  return (
    <>
      <h3 className="SetupForm__title">Personalized options</h3>
      <form className="SetupForm">
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
        <div className="SetupForm__wrapper--button">
          {formIsFilled ? (
            <button className="SetupForm__button" type="button">
              <Link className="SetupForm__button--link" to="/colours">
                Next
              </Link>
            </button>
          ) : (
            <button
              className="SetupForm__button SetupForm__button--disabled"
              type="button"
              disabled
            >
              Next
            </button>
          )}
          <button
            className="SetupForm__button"
            type="button"
            onClick={handleClick}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default SetupForm;
