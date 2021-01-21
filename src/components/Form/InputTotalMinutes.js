import PropTypes from 'prop-types';

function InputTotalMinutes(props) {
  const { totalMinutes, handleInputChange } = props;

  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.id,
      value: ev.currentTarget.value,
    };
    handleInputChange(data);
  };

  return (
    <>
      <label
        className="SetupForm__label SetupForm__label"
        htmlFor="totalMinutes"
      >
        <input
          className="SetupForm__input"
          id="totalMinutes"
          type="number"
          name="totalMinutes"
          value={totalMinutes}
          onChange={handleChange}
        />
        Total minutes for each player
      </label>
    </>
  );
}

InputTotalMinutes.propTypes = {
  totalMinutes: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default InputTotalMinutes;
