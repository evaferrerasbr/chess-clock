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
      <label htmlFor="playNumber">After play...</label>
      <input
        id="playNumber"
        type="text"
        name="playNumber"
        value={playNumber}
        onChange={handleChange}
      />
    </>
  );
}

export default InputPlayNumber;
