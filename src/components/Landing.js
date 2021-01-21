import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

  return (
    <>
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
        <div className="Landing__wrapper">
          {formIsFilled ? (
            <button className="Landing__button" type="button">
              <Link
                className="Landing__button Landing__button--link"
                to="/game"
              >
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
        </div>
      </section>
    </>
  );
}

Landing.propTypes = {
  totalMinutes: PropTypes.string,
  incAfterEachPlay: PropTypes.string,
  playNumber: PropTypes.string,
  incOfMinutes: PropTypes.string,
  formIsFilled: PropTypes.bool,
  handleInputChange: PropTypes.func,
  handlePredefinedSettings: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Landing;
