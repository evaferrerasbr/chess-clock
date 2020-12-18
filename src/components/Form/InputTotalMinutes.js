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
      <label htmlFor="totalMinutes">Minutes for each player</label>
      <input
        id="totalMinutes"
        type="text"
        name="totalMinutes"
        value={totalMinutes}
        onChange={handleChange}
      />
    </>
  );
}

export default InputTotalMinutes;
