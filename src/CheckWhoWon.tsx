import React from "react";

const CheckWhoWon = (
  xWon: boolean,
  oWon: boolean,
  tie: boolean,
  emptyBoard: () => void
) => {
  if (xWon) {
    return (
      <>
        <p className="text-5xl lowercase mt-7 max-w-lg">Крестики победили</p>
        <button
          className="button px-9 py-4 text-3xl mt-12 text-white"
          onClick={() => emptyBoard()}
        >
          Заново
        </button>
      </>
    );
  } else if (oWon) {
    return (
      <>
        <p className="text-5xl lowercase mt-7">Нолики победили</p>
        <button
          className="button px-9 py-4 text-3xl mt-12 text-white"
          onClick={() => emptyBoard()}
        >
          Заново
        </button>
      </>
    );
  }
  if (!xWon && !oWon && tie) {
    return (
      <>
        <p className="text-5xl lowercase mt-7">Ничья</p>
        <button
          className="button px-9 py-4 text-3xl mt-12 text-white"
          onClick={() => emptyBoard()}
        >
          Заново
        </button>
      </>
    );
  }
};

export default CheckWhoWon;
