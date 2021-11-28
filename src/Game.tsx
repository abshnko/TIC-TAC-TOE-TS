import React, { useState } from "react";
import ChooseGame from "./ChooseGame";
import PlayWithComputer from "./PlayWithComputer";
import PlayWithFriend from "./PlayWithFriend";

const Game = () => {
  const [isChosenGame, setIsChosenGame] = useState(false);
  const [playWithFriend, setPlayWithFriend] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between h-1/2 w-1/2 m-auto border-2 pb-6">
        {!isChosenGame && (
          <ChooseGame
            setIsChosenGame={setIsChosenGame}
            setPlayWithFriend={setPlayWithFriend}
          />
        )}
        {isChosenGame && playWithFriend && <PlayWithFriend />}
        {isChosenGame && !playWithFriend && <PlayWithComputer />}
      </div>
    </div>
  );
};

export default Game;
