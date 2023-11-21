import React, { useState } from 'react';
import Buttons from './Buttons';
import Scores from './Scores';


const Player = (props) => {
    const [steps, setSteps] = useState(0);
    //Button manager
    const OnButtons = (event) => {
        if (props.object.currentTurns) {
            props.object.number = Math.floor(eval(props.object.number + event.target.innerText))
            setSteps(props.object.steps=steps+1) 
            setCurrentTurns()
            removeObject()
            console.log(props.ArrayPlayerNames)
        }
    }
    //set true or false
    const setCurrentTurns = () => {
        if (props.object.index < props.ArrayPlayerNames.length - 1) {
            props.object.currentTurns = false;
            props.ArrayPlayerNames[props.object.index + 1].currentTurns = true;
        }
        else {
            props.object.currentTurns = false;
            props.ArrayPlayerNames[
                props.ArrayPlayerNames.length - props.ArrayPlayerNames.length]
                .currentTurns = true;
        }
    }
    //delete object
    const removeObject = () => {
        if (props.object.number === 100) {
            AddToLocalStorage()
            if(props.ArrayPlayerNames.length === 1) {
                props.setPlayerNames([
                    ...props.ArrayPlayerNames.splice(0,1)
                ]);
            }
            props.setPlayerNames([
                ...props.ArrayPlayerNames.slice(0, props.object.index),
                ...props.ArrayPlayerNames.slice(props.object.index + 1)
            ]);
        }
        }
    //exiting
    const Exit = () => {
        if(props.ArrayPlayerNames.length === 1){
            props.setPlayerNames([
                ...props.ArrayPlayerNames.splice(0, 1)
            ]);
        }
        props.setPlayerNames([
            ...props.ArrayPlayerNames.slice(0, props.object.index),
            ...props.ArrayPlayerNames.slice(props.object.index + 1)
        ]);
    }
    const AddToLocalStorage=()=>{
    localStorage.setItem(props.object.name, JSON.stringify(props.object.steps));
    }
    return (
        <header>
        <div className='player'>
            <h1>{props.object.name}</h1>
            <h2>The number is: {props.object.number} </h2>
            <Buttons onclick={OnButtons} exit={Exit} />
            <Scores score={props.object.steps} />
        </div>
       
</header>
    );
    }

export default Player;












