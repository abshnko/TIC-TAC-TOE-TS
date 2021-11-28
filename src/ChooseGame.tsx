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
      <h1 className="text-center text-7xl mb-24 bg-gradient-to-r from-green-300 to-blue-300 py-8">
        Крестики-нолики
      </h1>
      <div className="choose justify-end">
        <h2 className="text-center text-4xl py-8">С кем вы хотите играть?</h2>
        <div className="buttons text-center text-4xl ">
          <button
            className="p-8 rounded-lg mr-3 transition duration-200 ease-in-out bg-blue-200 hover:bg-green-300 transform hover:-translate-1 hover:scale-105"
            onClick={() => {
              setIsChosenGame(true);
              setPlayWithFriend(true);
            }}
          >
            с другом
          </button>
          <button
            className="p-8 rounded-lg ml-3 transition duration-200 ease-in-out bg-blue-200 hover:bg-green-300 transform hover:-translate-1 hover:scale-105"
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
