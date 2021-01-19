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
      <section className="Landing__options">
        <button
          className="Landing__button Landing__button--reset"
          type="button"
          onClick={handleClick}
        >
          Reset
        </button>
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
        <div className="Landing__wrapper">
          {formIsFilled ? (
            <button
              className="Landing__button Landing__button--next"
              type="button"
            >
              <Link className="Landing__button--link" to="/game">
                Next
              </Link>
            </button>
          ) : (
            <button
              className="Landing__button Landing__button--next Landing__button--disabled"
              type="button"
              disabled
            >
              Next
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default Landing;
