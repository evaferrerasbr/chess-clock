import PredefinedSettings from './PredefinedSettings';
import SetupForm from './Form/SetupForm';

function Landing(props) {
  const {
    totalMinutes,
    incAfterEachPlay,
    playNumber,
    incOfMinutes,
    isClicked,
    handleInputChange,
    handlePredefinedSettings,
    handleReset,
  } = props;

  return (
    <>
      <PredefinedSettings handlePredefinedSettings={handlePredefinedSettings} />
      <SetupForm
        totalMinutes={totalMinutes}
        incAfterEachPlay={incAfterEachPlay}
        playNumber={playNumber}
        incOfMinutes={incOfMinutes}
        isClicked={isClicked}
        handleInputChange={handleInputChange}
        handleReset={handleReset}
      />
    </>
  );
}

export default Landing;
