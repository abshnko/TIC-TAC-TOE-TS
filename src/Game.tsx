import React, { useState } from "react";
import ChooseGame from "./ChooseGame";
import PlayWithComputer from "./PlayWithComputer";
import PlayWithFriend from "./PlayWithFriend/PlayWithFriend";

const Game = () => {
  const [isChosenGame, setIsChosenGame] = useState(false);
  const [playWithFriend, setPlayWithFriend] = useState(false);
  return (
    <div className="wrapper flex h-screen">
      <div className="board-wrapper items-center flex flex-col h-2/3 w-2/3 mx-auto my-10 pb-6">
        {!isChosenGame && (
          <ChooseGame
            setIsChosenGame={setIsChosenGame}
            setPlayWithFriend={setPlayWithFriend}
          />
        )}
        {isChosenGame && playWithFriend && (
          <PlayWithFriend
            setIsChosenGame={setIsChosenGame}
            setPlayWithFriend={setPlayWithFriend}
          />
        )}
        {isChosenGame && !playWithFriend && <PlayWithComputer />}
      </div>
    </div>
  );
};

export default Game;
