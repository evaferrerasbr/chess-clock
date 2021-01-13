const getFromLocalStorage = () => {
  const dataLocal = JSON.parse(localStorage.getItem('dataLocal'));
  return dataLocal !== null
    ? dataLocal
    : {
        totalMinutes: '',
        incAfterEachPlay: '',
        playNumber: '',
        incOfMinutes: '',
        formIsFilled: false,
        whitesForLeft: false,
        whiteCounter: 0,
        blackCounter: 0,
        whitesTurn: true,
        isStarted: false,
        isStopped: false,
      };
};

const setLocalStorage = (
  totalMinutes,
  incAfterEachPlay,
  playNumber,
  incOfMinutes,
  formIsFilled,
  whitesForLeft,
  whiteCounter,
  blackCounter,
  whitesTurn,
  isStarted,
  isStopped
) => {
  const data = {
    totalMinutes: totalMinutes,
    incAfterEachPlay: incAfterEachPlay,
    playNumber: playNumber,
    incOfMinutes: incOfMinutes,
    formIsFilled: formIsFilled,
    whitesForLeft: whitesForLeft,
    whiteCounter: whiteCounter,
    blackCounter: blackCounter,
    whitesTurn: whitesTurn,
    isStarted: isStarted,
    isStopped: isStopped,
  };
  localStorage.setItem('dataLocal', JSON.stringify(data));
};

export { setLocalStorage, getFromLocalStorage };
