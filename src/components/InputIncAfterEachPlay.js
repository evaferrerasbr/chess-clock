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
      <label htmlFor="incAfterEachPlay">
        Increment after each play (seconds)
      </label>
      <input
        id="incAfterEachPlay"
        type="text"
        name="incAfterEachPlay"
        value={incAfterEachPlay}
        onChange={handleChange}
      />
    </>
  );
}

export default InputIncAfterEachPlay;
