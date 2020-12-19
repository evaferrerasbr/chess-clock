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
        Increment of seconds after each play
      </label>
      <input
        className="SetupForm__input"
        id="incAfterEachPlay"
        type="number"
        name="incAfterEachPlay"
        value={incAfterEachPlay}
        onChange={handleChange}
      />
    </>
  );
}

export default InputIncAfterEachPlay;
