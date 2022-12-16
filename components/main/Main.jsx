import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
// import { FaHome } from "react-icons/fa"
import { Questions } from "../../helpers/Questions";

import './Main.css';

const Main = () => {

    //Shuffle questions array
    const shuffled = Questions.sort(() => 0.5 - Math.random());
    //Take 10 random questions array
    

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);
    
    const d = new Date();
    var minutes;

    //set new 10 random question every time when components re-render
    useEffect(() => {
        getFromData()
    })
    async function getFromData(){
        let {data}= await axios.get('http://localhost:3001/getQuiz')
        //console.log(data.q[0].time)
        //console.log(data.q.length)
        // console.log(data.q)
        let questionsArray = data.q.slice(0, 10); //the count of the questions
        
        //console.log(questionsArray.length)
        setQuestions(questionsArray);
    }
    //for the clk 
    if(d.getMinutes()<10) {
        minutes="0"+d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }

    return <div className="Main">
        <div className="terminal-wrapper fadeIn">
            {/* <div className="terminal-top ">
                <div className="top-left">
                    
                </div>
                <div className="top-mid delay-1_3 fadeIn">
                    <div className="house ">
                        <FaHome />
                    </div>
                    <span className=""></span>
                </div>
                <div>
                </div>
            </div> */}
            <div className='top-top'>
            <div>
               
               {/* Start button */}
               <p className=" terminal-text-start ">Welcome to Quiz Night <br/>Let's Start !</p>
               <div className=" terminal-bot-btn terminal-text-start terminal-start">
             
                   <button onClick={() => { setGameState("quiz"); }} className=" terminal-bot-btn-start startBtn button-transition">Start</button>
               </div>
           </div>
            </div>
            
        </div>
    </div>
}

export default Main;