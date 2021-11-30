const DetermineGameOver = (
  board: number[][],
  setOWon: (active: boolean) => void,
  setXWon: (active: boolean) => void,
  setTie: (active: boolean) => void
) => {
  let vert1 = [board[0][0], board[1][0], board[2][0]];
  let vert2 = [board[0][1], board[1][1], board[2][1]];
  let vert3 = [board[0][2], board[1][2], board[2][2]];
  let diag1 = [board[0][0], board[1][1], board[2][2]];
  let diag2 = [board[0][2], board[1][1], board[2][0]];
  const reducerAdd = (previousValue: number, currentValue: number) =>
    previousValue + currentValue;
  const reducerMult = (previousValue: number, currentValue: number) =>
    previousValue * currentValue;
  if (
    vert1.reduce(reducerAdd) === -3 ||
    vert2.reduce(reducerAdd) === -3 ||
    vert3.reduce(reducerAdd) === -3 ||
    diag1.reduce(reducerAdd) === -3 ||
    diag2.reduce(reducerAdd) === -3
  ) {
    setOWon(true);
  } else if (
    vert1.reduce(reducerAdd) === 3 ||
    vert2.reduce(reducerAdd) === 3 ||
    vert3.reduce(reducerAdd) === 3 ||
    diag1.reduce(reducerAdd) === 3 ||
    diag2.reduce(reducerAdd) === 3
  ) {
    setXWon(true);
  }

  for (var i = 0; i < board.length; i++) {
    const hor = board[i];
    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;
    if (hor.reduce(reducer) === -3) {
      setOWon(true);
    } else if (hor.reduce(reducer) === 3) {
      setXWon(true);
    }
  }

  if (board.flat().reduce(reducerMult) !== 0) {
    setTie(true);
  }
};

export default DetermineGameOver;
