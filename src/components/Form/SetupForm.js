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
      </form>
    </>
  );
}

export default SetupForm;
