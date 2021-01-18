import { Link } from 'react-router-dom';
import PredefinedSettings from './PredefinedSettings';
import SetupForm from './Form/SetupForm';
import '../stylesheets/Landing.scss';

function Landing(props) {
  const {
    totalMinutes,
    incAfterEachPlay,
    playNumber,
    incOfMinutes,
    formIsFilled,
    handleInputChange,
    handlePredefinedSettings,
    handleReset,
  } = props;

  const handleClick = () => {
    handleReset();
  };

  return (
    <>
      <h2 className="Landing__title">Step 1: configure your game</h2>
      <section className="Landing__options">
        <PredefinedSettings
          handlePredefinedSettings={handlePredefinedSettings}
        />
        <SetupForm
          totalMinutes={totalMinutes}
          incAfterEachPlay={incAfterEachPlay}
          playNumber={playNumber}
          incOfMinutes={incOfMinutes}
          formIsFilled={formIsFilled}
          handleInputChange={handleInputChange}
          handleReset={handleReset}
        />
      </section>
      <div className="Landing__wrapper">
        {formIsFilled ? (
          <button className="Landing__button" type="button">
            <Link className="Landing__button--link" to="/colours">
              Next
            </Link>
          </button>
        ) : (
          <button
            className="Landing__button Landing__button--disabled"
            type="button"
            disabled
          >
            Next
          </button>
        )}
        <button className="Landing__button" type="button" onClick={handleClick}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Landing;
