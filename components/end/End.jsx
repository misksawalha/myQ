import React, { useContext } from 'react';
import { QuizContext } from '../../helpers/Contexts';
// import { FaHome } from "react-icons/fa"

import './End.css';

const End = () => {
    const { gameState, setGameState } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);
    const {currQuestion, setCurrQuestion} = useContext(QuizContext);
    const { questions, setQuestions } = useContext(QuizContext);
    const d = new Date();
    var minutes;
    var time = 15-counter;
    var result;

    //Result message for timer
    // if (time<15) {
    //     result = `your time: ${time} seconds`;
    // } else {
    //     result = "you didn't finish on time."
    // }

    if(d.getMinutes()<10) {
        minutes="0"+d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }

    //Try again - show main screen, set score back to 0, set counter back to 240 seconds

    return <div className="End ">
        <div className="terminal-wrapper">
 
            <div className="terminal-bot">
                {/* End message */}
                <p className="terminal-prompt last-login"></p>
                <p className="terminal-prompt mt-25 terminal-msg"><span className="terminal-green"></span> </p>
                <p className="terminal-prompt terminal-msg"><span className="terminal-green"></span> </p>
                {/* Score */}
                <p className="terminal-prompt terminal-msg"><span className="terminal-green"></span> your score is: {score}/10 </p>
                {/* Timer */}
                <p className="terminal-prompt terminal-msg"><span className="terminal-green"></span> {result} </p>
                {/* Depends on score get different message */}
                {/* <p className="terminal-prompt terminal-msg"><span className="terminal-green"></span> { score > 5 ? 'you are one of the biggest fans of Mr. Robot' : 'you still have to learn, then come back and try again.'} </p> */}
                {/* End question */}
                <div className="mt-25 terminal-prompt terminal-text">
                    <p className="terminal-green"></p>
                    <p className="pl-7"></p>
                </div>
                {/* Try again button */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="terminal-green"></p>
                    {/* <button onClick={() => { backOnMain(); }} className="startBtn button-transition">Try again</button> */}
                </div>
            </div>
        </div>
    </div>
}

export default End;