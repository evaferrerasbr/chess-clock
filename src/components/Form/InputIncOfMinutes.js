function InputIncOfMinutes(props) {
  const { incOfMinutes, handleInputChange } = props;

  const handleChange = (ev) => {
    const data = {
      name: ev.currentTarget.id,
      value: ev.currentTarget.value,
    };
    handleInputChange(data);
  };

  return (
    <>
      <label className="SetupForm__label" htmlFor="incOfMinutes">
        <input
          className="SetupForm__input"
          id="incOfMinutes"
          type="number"
          name="incOfMinutes"
          value={incOfMinutes}
          onChange={handleChange}
        />
        Increment of minutes at selected play
      </label>
    </>
  );
}

export default InputIncOfMinutes;
