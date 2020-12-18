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
      <label htmlFor="incOfMinutes">increment...</label>
      <input
        id="incOfMinutes"
        type="text"
        name="incOfMinutes"
        value={incOfMinutes}
        onChange={handleChange}
      />
      <p className="SetupForm__paragraph">minutes</p>
    </>
  );
}

export default InputIncOfMinutes;
