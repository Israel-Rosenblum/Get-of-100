import React from 'react';
import Player from './Players';
import { useState } from 'react';
import Winner from './Winner';
const Game = () => {
    let rand = Math.floor(Math.random() * 99);
    const [index, setIndex] = useState(0)
    const [playerNames, setPlayerNames] = useState([]);
    const [numbers, setNumbers] = useState(rand);
   //create player
    const AddPlayer = () => {
        const newPlayer = {
            name: prompt("Add Player"),
            currentTurns: playerNames.length === 0 ? true : false,
            number: rand,
            steps: 0,
            index: index,
        }
        playerNames.length === 0?setPlayerNames([newPlayer]):
        setPlayerNames([...playerNames,newPlayer]);
        setIndex(index + 1)
    }
    return (
        <main>
            <button className='addplayer' onClick={AddPlayer}>add Player</button>
            <div className='play'>
                {playerNames.map((player, index) => <Player
                    object={playerNames[index] }
                    key={index}
                    ArrayPlayerNames={playerNames}
                     setPlayerNames={setPlayerNames}
                    setNumbers={setNumbers}
                    //  setSteps={setSteps}
                    //   mySteps={mySteps}
                />)}
            </div>
            {playerNames.length===0 && <Winner />}
             
        </main>
    );
}

export default Game;