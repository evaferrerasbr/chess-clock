function PredefinedSettings(props) {
  const { handlePredefinedSettings } = props;

  const handleClick = (ev) => {
    if (ev.currentTarget.id === '3') {
      const data = {
        minutes: '3',
        seconds: '2',
      };
      handlePredefinedSettings(data);
    } else if (ev.currentTarget.id === '5') {
      const data = {
        minutes: '5',
        seconds: '3',
      };
      handlePredefinedSettings(data);
    } else if (ev.currentTarget.id === '10') {
      const data = {
        minutes: '10',
        seconds: '10',
      };
      handlePredefinedSettings(data);
    }
  };

  return (
    <div className="PredefinedSettings">
      <button id="3" onClick={handleClick}>
        3 + 2
      </button>
      <button id="5" onClick={handleClick}>
        5 + 3
      </button>
      <button id="10" onClick={handleClick}>
        10 + 10
      </button>
    </div>
  );
}

export default PredefinedSettings;
