function InputPlayNumber(props) {
  const { playNumber, handleInputChange } = props;

  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.id,
      value: ev.currentTarget.value,
    };
    handleInputChange(data);
  };

  return (
    <>
      <label className="SetupForm__label SetupForm__label" htmlFor="playNumber">
        <input
          className="SetupForm__input"
          id="playNumber"
          type="number"
          name="playNumber"
          value={playNumber}
          onChange={handleChange}
        />
        Play number
      </label>
    </>
  );
}

export default InputPlayNumber;
