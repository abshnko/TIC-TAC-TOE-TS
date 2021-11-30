import React from "react";

interface ChooseGameProps {
  setIsChosenGame: (active: boolean) => void;
  setPlayWithFriend: (active: boolean) => void;
}

const ChooseGame = ({
  setIsChosenGame,
  setPlayWithFriend,
}: ChooseGameProps) => {
  return (
    <>
      <h1 className="text-center text-7xl mb-24  py-8">Крестики-нолики</h1>
      <div className="choose justify-end">
        <h2 className="text-center text-4xl py-8">С кем вы хотите играть?</h2>
        <div className="buttons text-center text-3xl ">
          <button
            className="button px-9 py-4 text-3xl mt-12 text-white mr-5"
            onClick={() => {
              setIsChosenGame(true);
              setPlayWithFriend(true);
            }}
          >
            с другом
          </button>
          <button
            className="button px-9 py-4 text-3xl mt-12 text-white"
            onClick={() => {
              setIsChosenGame(true);
            }}
          >
            с компьютером
          </button>
        </div>
      </div>
    </>
  );
};

export default ChooseGame;
