import React, { useState, useEffect } from "react";
import CheckWhoWon from "../CheckWhoWon";
import DetermineGameOver from "../DetermineGameOver";
import DisplayBoard from "../DisplayBoard";

interface Props {
  setIsChosenGame: (active: boolean) => void;
  setPlayWithFriend: (active: boolean) => void;
}

const PlayWithFriend = ({ setIsChosenGame, setPlayWithFriend }: Props) => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [xMoves, setXMoves] = useState(true);
  const [oWon, setOWon] = useState(false);
  const [xWon, setXWon] = useState(false);
  const [tie, setTie] = useState(false);

  const makeMove = (i: number, j: number) => {
    if (!xWon && !oWon) {
      let copy = [...board];
      if (xMoves) {
        copy[i][j] = 1;
        setBoard(copy);
        setXMoves(false);
      } else {
        copy[i][j] = -1;
        setBoard(copy);
        setXMoves(true);
      }
    }
  };

  const emptyBoard = () => {
    setBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setOWon(false);
    setXWon(false);
    setTie(false);
    setXMoves(true);
  };

  useEffect(() => {
    DetermineGameOver(board, setOWon, setXWon, setTie);
  }, [board]);

  return (
    <>
      <div className="top-row flex w-2/4 justify-between">
        <button
          className=" justify-start"
          onClick={() => {
            setIsChosenGame(false);
            setPlayWithFriend(false);
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.939338 10.9393C0.353552 11.5251 0.353551 12.4749 0.939338 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939338 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z"
              fill="#8A3FFC"
            />
          </svg>
        </button>
        <h2 className="text-right pt-8 text-xl w-96">
          Ходите по очереди с другом. Первыми ходят крестики. Удачи!
        </h2>
      </div>
      <div className="board w-2/4 max-h-screen flex flex-wrap mx-36 items-center border-2 m-7">
        {DisplayBoard(board, makeMove, xMoves, xWon, oWon)}
      </div>
      <div className="results text-center">
        {CheckWhoWon(xWon, oWon, tie, emptyBoard)}
      </div>
    </>
  );
};

export default PlayWithFriend;
