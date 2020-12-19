import PredefinedSettings from './PredefinedSettings';
import SetupForm from './Form/SetupForm';
import '../stylesheets/Landing.scss';

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
      <h2 className="Landing__title">Step 1: configure your game</h2>
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
