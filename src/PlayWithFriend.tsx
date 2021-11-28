import React, { useState } from "react";

const PlayWithFriend = () => {
  const [board, setBoard] = useState([
    [1, 0, -1],
    [0, 0, 0],
    [1, 1, 0],
  ]);

  const iterateThroughBoard = () => {};

  const displayBoard = (board: number[][]) => {
    console.log(board);

    var boardJSX = [];
    for (var i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === -1) {
          boardJSX.push(
            <button className="w-1/3 h-1/3 flex justify-center items-center border-2">
              <svg
                width="70%"
                height="70%"
                viewBox="0 0 221 221"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="110.5"
                  cy="110.5"
                  r="97.5"
                  fill="white"
                  stroke="black"
                  stroke-width="26"
                />
              </svg>
            </button>
          );
        } else if (board[i][j] === 1) {
          boardJSX.push(
            <button className="w-1/3 h-1/3 flex justify-center items-center border-2">
              <svg
                width="70%"
                height="70%"
                viewBox="0 0 222 222"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="9.19239"
                  y1="9.80761"
                  x2="212.192"
                  y2="212.808"
                  stroke="black"
                  stroke-width="26"
                />
                <line
                  x1="212.192"
                  y1="9.19239"
                  x2="9.19239"
                  y2="212.192"
                  stroke="black"
                  stroke-width="26"
                />
              </svg>
            </button>
          );
        } else {
          boardJSX.push(
            <button className="w-1/3 h-1/3 flex justify-center border-2"></button>
          );
        }
      }
    }
    return boardJSX.map((symbol) => symbol);
  };
  return (
    <>
      <h2 className="text-center">
        Ходите по очереди с другом. Первыми ходят крестики. Удачи!
      </h2>
      <div className="board flex flex-wrap mx-36 items-center border-2 h-full m-7">
        {displayBoard(board)}
      </div>
    </>
  );
};

export default PlayWithFriend;
