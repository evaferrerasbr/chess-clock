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
      />
    </>
  );
}

export default Landing;
