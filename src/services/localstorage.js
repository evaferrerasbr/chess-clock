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
        afterFirstTurn: false,
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
  isStopped,
  afterFirstTurn
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
    afterFirstTurn: afterFirstTurn,
  };
  localStorage.setItem('dataLocal', JSON.stringify(data));
};

export { setLocalStorage, getFromLocalStorage };
