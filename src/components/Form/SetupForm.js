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
  } = props;

  return (
    <>
      <form className="SetupForm">
        <h3 className="SetupForm__title">Personalized options</h3>
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
      </form>
    </>
  );
}

export default SetupForm;
