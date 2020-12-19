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
        className="SetupForm__label SetupForm__label--short"
        htmlFor="totalMinutes"
      >
        Minutes for each player
      </label>
      <input
        className="SetupForm__input"
        id="totalMinutes"
        type="number"
        name="totalMinutes"
        value={totalMinutes}
        onChange={handleChange}
      />
    </>
  );
}

export default InputTotalMinutes;
