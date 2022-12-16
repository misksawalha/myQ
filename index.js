import React ,{useState} from 'react';
import './styles.css'
import SideMenu from '../../layouts/sideMenu';
import Header from '../../layouts/header';
import Main from '../quizNight/components/main/Main'
import Quiz from '../quizNight/components/quiz/Quiz'
import End from '../quizNight/components/end/End'
import { QuizContext } from './helpers/Contexts';
const QuizNight = () => {
    const [counter, setCounter] = useState(5);
    const [questions, setQuestions] = useState();
    const [gameState, setGameState] = useState("main");
    const [score, setScore] = useState(0);
    return (
        <>
        <Header />
            <div className='quiz-container'>
                <SideMenu />
                <div className='quizNight-container'>
                <QuizContext.Provider value={{ gameState, setGameState, score, setScore, questions, setQuestions, counter, setCounter }}>
                    {gameState === "main" && <Main />}
                    {gameState === "quiz" && <Quiz />}
                    {gameState === "end" && <End />}
                </QuizContext.Provider></div>
                
            </div>
            </>
    )
}
export default QuizNight;
