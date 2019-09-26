import React from 'react'
import Button from './Button'
// import NameForm from './NameForm'


const EndingScreen = () => {
  const correctGuesses = localStorage.getItem('CorrectGuesses');
  const guess = localStorage.getItem("TotalGuesses");

  let score = Math.floor(correctGuesses * (5 * (correctGuesses / guess)));

  if (isNaN(score)) {
    score = 0;
  }

  let isNameHere = localStorage.getItem("SignUpCred") || "";

  localStorage.setItem('GameScore', JSON.stringify(score));

  if (isNameHere) {
    let oldGames = JSON.parse(localStorage.getItem(isNameHere)) || [];
    let newGame = { score: score};
    oldGames.push(newGame);
    localStorage.setItem(isNameHere, JSON.stringify(oldGames));
  }





  return (
    <div className='end-screen'>
      <div className='end-content'>
        {isNameHere ? (
          <h2>Congrats{` ${isNameHere}`}! </h2>
          ) : (
            <h2>Congrats!</h2>
          )}
        <br />
        <h4>Correct Guesses: </h4>
        <h4>Total Gusses: </h4>
        <h3>Score: </h3>
        {''} 
     
      </div>
      <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
    </div>
  )
}

export default EndingScreen