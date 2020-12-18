import PredefinedSettings from './PredefinedSettings';
import SetupForm from './SetupForm';

function Landing(props) {
  const {
    totalMinutes,
    incAfterEachPlay,
    playNumber,
    incOfMinutes,
    isClicked,
    handleInputChange,
    handleReset,
  } = props;

  return (
    <>
      <PredefinedSettings />
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
