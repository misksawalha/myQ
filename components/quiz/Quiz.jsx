import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';


import "./Quiz.css";

const Quiz = () => {

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);
    
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [questionCounter, setQuestionCounter] = useState(1);
    
    let btns = document.getElementsByClassName("optionBtn");
    const d = new Date();
    var minutes;
    var lastQuestion;

    if (d.getMinutes() < 10) {
        minutes = "0" + d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }
    const nextQuestion = () => {
        if(counter==0){
            
        
        //show new background image
        // document.getElementById("app").style.backgroundImage = "url('" + questions[currQuestion].img + "')";
        //disable next question btn
        setOptionChosen("");

        //if user answered correctly increase score so we can keep track how many correct answers user had
        //change colors of the answers - green if it is correct, red if it is wrong
        if (questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
            document.getElementById('btn-' + questions[currQuestion].answer)
            // .style.color = "#008c23";
            document.getElementById('btn-' + questions[currQuestion].answer)
            // .style.borderColor = "#008c23";
        } else {
            document.getElementById('btn-' + optionChosen)
            // .style.color = "#FF5B52";
            document.getElementById('btn-' + optionChosen)
            // .style.borderColor = "#FF5B52";
            document.getElementById('btn-' + questions[currQuestion].answer)
            // .style.color = "#51C22A";
            document.getElementById('btn-' + questions[currQuestion].answer)
            // .style.borderColor = "#51C22A";
        }

        //if questionCounter is less then 10 - show next question + increase questionCounter
        if (questionCounter < 10) {
            setCounter(questions[currQuestion].time)
            setTimeout(function () {

                setCurrQuestion(currQuestion + 1);
                setQuestionCounter(questionCounter + 1);

                //remove background image
              //  document.getElementById("app").style.backgroundImage = "url('')";

                //remove styles from buttons
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.color = "#E6C027";
                    btns[i].style.background = "transparent";
                    btns[i].style.borderColor = "#E6C027";
                }
            }, 0)
            //else if it is bigger - show end screen
        } else {
            setTimeout(function () {
             //   document.getElementById("app").style.backgroundImage = "url('')";
                //when user answer on question number 10 we render end component
                if (questionCounter == 10) {
                    console.log(questionCounter)
                    setGameState("end");
                }
            }, 4000)
        }
         }
         else{
            console.log("hi")
         }
    }
     //here we will check the timer 
    useEffect(() => {
        
        //when answer is chosed - disable next question btn
        if (optionChosen === "" ) {
           
            // document.getElementById('nextBtn').setAttribute("disabled", "disabled");
        } 
        else if(optionChosen != "" ) {
            
            // document.getElementById('nextBtn').removeAttribute("disabled", "disabled");
           // alert("misk")
            //setCounter(240)
        }
        //timer for quiz - when timer reach 0 end screen appear
       //let timer = questions[currQuestion].time
      // console.log(timer)
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        //the value here will be false 
      //  console.log(timer)

        // when the counter == zero the value of the stm will be false so the 
        // the timer will equal zero
        if (timer == 0) {

            //setCounter(90)
       // setGameState("end");
       
         nextQuestion()
        }
      
      return () => clearInterval(timer);
    }, [counter])
    
    //if we reached last question change path for next question from /Question_? to /End
    if (questionCounter < 10) {
        lastQuestion = `Question_${questionCounter + 1}`;
    } else {
        lastQuestion = "End";
    }

    return <div className="Quiz fadeIn delay-0_3">
        <div className="terminal-wrapper">
            <div className="terminal-top ">
                <div className="top-left">
                   
                </div>
                <div className="top-mid">
                    <div className="house ">

                    </div>
                 
                </div>
                {/* Show timer in top-right */}
                <div className="top-right" style={{ color: counter < 11 && '#FF5B52' }}>
                    {counter}
                </div>
            </div>
            <div id="terminal-wrapper" className="terminal-bot">
                <p className="terminal-prompt last-login">

                </p>
                {/* User score */}
                {/* <p className="terminal-prompt mt-25 last-login"><span className="terminal-green"></span> your score is: {score}/10</p> */}
                {/* Timer */}
                {/* <p className="terminal-prompt last-login"><span className="terminal-green"></span> your time is: <span style={{ color: counter < 11 && '#FF5B52' }}>{counter}</span></p> */}
                {/* Hint */}
               
                <p className="mt-25 terminal-prompt">  {questions[currQuestion].question} :<span className="terminal-green"> {questionCounter} </span></p>
                {/* Option A */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">A :</p>
                    <button id="btn-a" onClick={() => { setOptionChosen("a"); }} className="optionBtn option-transition">{questions[currQuestion].optionA}</button>
                </div>
                {/* Option B */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">B :</p>
                    <button id="btn-b" onClick={() => { setOptionChosen("b"); }} className="optionBtn option-transition">{questions[currQuestion].optionB}</button>
                </div>
                {/* Option C */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">C :</p>
                    <button id="btn-c" onClick={() => { setOptionChosen("c"); }} className="optionBtn option-transition">{questions[currQuestion].optionC}</button>
                </div>
                {/* Option D */}
                <div className="mt-10 terminal-prompt terminal-text terminal-start">
                    <p className="">D :</p>
                    <button id="btn-d" onClick={() => { setOptionChosen("d"); }} className="optionBtn option-transition">{questions[currQuestion].optionD}</button>
                </div>
                {/* Next question button */}
                <div className=" terminal-prompt terminal-text terminal-start">
                    {/* <p className="">{lastQuestion}</p> */}
                    {/* Change next button text when we reach last question */}
                    {/* <button id="nextBtn" onClick={() => { nextQuestion(); }} className="startBtn button-transition"> {questionCounter < 10 ? 'Next question' : 'End quiz'}</button> */}
                </div>
            </div>
        </div>
    </div>
}

export default Quiz;