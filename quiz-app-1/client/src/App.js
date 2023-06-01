import React, { useState, useContext} from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
//import Home from './Components/Home';


import {QuizContext} from './Helpers/Context';

export default function App(){
    const [gameState, setGameState] = useState("menu"); //initial state and the first thing the user sees. Global state that can be accessed from any component
    const [score, setScore] = useState(0);

    return(
        <div className="App">
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
                {gameState === 'menu' && <MainMenu />}
                {gameState === 'quiz' && <Quiz />}
                {gameState === 'endScreen' && <EndScreen />}
            </QuizContext.Provider>
        </div>
    )
}