
// RockPaperScissors.js
import React, { useState } from 'react';
import Header from "../Header";

import "./index.css"


const options = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleUserChoice = (choice) => {
    const computerRandomChoice = options[Math.floor(Math.random() * options.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a draw!");
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  const handleRestart = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
     <>
     <Header />
    <div className="game">
      <h2>Rock Paper Scissors</h2>
      <div className="choices">
        {options.map(option => (
          <button key={option} onClick={() => handleUserChoice(option)} className="choice-button">
            {option}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="results">
          <h3>Your Choice: {userChoice}</h3>
          <h3>Computer's Choice: {computerChoice}</h3>
          <h3>Result: {result}</h3>
        </div>
      )}
      <button className="restart" onClick={handleRestart}>Play Again</button>
    </div>
    </>
  );
};


export default RockPaperScissors;