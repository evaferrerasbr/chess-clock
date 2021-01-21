import PropTypes from 'prop-types';

function InputIncAfterEachPlay(props) {
  const { incAfterEachPlay, handleInputChange } = props;

  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.id,
      value: ev.currentTarget.value,
    };
    handleInputChange(data);
  };

  return (
    <>
      <label className="SetupForm__label" htmlFor="incAfterEachPlay">
        <input
          className="SetupForm__input"
          id="incAfterEachPlay"
          type="number"
          name="incAfterEachPlay"
          value={incAfterEachPlay}
          onChange={handleChange}
        />
        Increment of <span className="SetupForm__bold">seconds</span> after each
        play
      </label>
    </>
  );
}

InputIncAfterEachPlay.propTypes = {
  incAfterEachPlay: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default InputIncAfterEachPlay;
