import React from "react";

const DisplayBoard = (
  board: number[][],
  makeMove: (i: number, j: number) => void,
  xMoves: boolean,
  xWon: boolean,
  oWon: boolean
) => {
  var boardJSX = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === -1) {
        boardJSX.push(
          <button className="w-1/3 h-1/3 flex justify-center items-center border-2 cursor-default">
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
                fill="transparent"
                stroke="#FA4D56"
                stroke-width="26"
              />
            </svg>
          </button>
        );
      } else if (board[i][j] === 1) {
        boardJSX.push(
          <button className="w-1/3 h-1/3 flex justify-center items-center border-2 cursor-default">
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
                stroke="#0F62FE"
                stroke-width="26"
              />
              <line
                x1="212.192"
                y1="9.19239"
                x2="9.19239"
                y2="212.192"
                stroke="#0F62FE"
                stroke-width="26"
              />
            </svg>
          </button>
        );
      } else {
        boardJSX.push(
          <button
            className={`${
              !xWon && !oWon ? "hover" : "hide"
            } w-1/3 h-1/3 flex justify-center items-center border-2`}
            onClick={() => makeMove(i, j)}
          >
            {xMoves && (
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
                  stroke="#A6C8FF"
                  stroke-width="26"
                />
                <line
                  x1="212.192"
                  y1="9.19239"
                  x2="9.19239"
                  y2="212.192"
                  stroke="#A6C8FF"
                  stroke-width="26"
                />
              </svg>
            )}
            {!xMoves && (
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
                  fill="transparent"
                  stroke="#FFB3B8"
                  stroke-width="26"
                />
              </svg>
            )}
          </button>
        );
      }
    }
  }
  return boardJSX.map((symbol) => symbol);
};

export default DisplayBoard;
