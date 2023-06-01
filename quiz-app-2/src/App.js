import React from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './components/Home.js' 
import Quiz from './components/Quiz.js' 

export default function App() { 
    return ( 
        <Router> 

            <nav style={{ margin: 10 }}> 
                <Link to="/" style={{ padding: 5 }}> 
                Home
                </Link> 
                <Link to="/quiz" style={{ padding: 5 }}> 
                Quiz
                </Link>
            </nav> 
            <Routes> 
                <Route path ="/" element={<Home />} /> 
                <Route path ="/quiz" element={<Quiz />} /> 
             </Routes> 
        
        </Router> 
    ); 
  } 
