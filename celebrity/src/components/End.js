import React from 'react'
import Button from './Button'
// import NameForm from './NameForm'


const EndingScreen = () => {
  const correctGuesses = localStorage.getItem('CorrectGuesses');
  const guess = localStorage.getItem("TotalGuesses");



  return (
    <div className='end-screen'>
      <div className='end-content'>
        {''}
          <h2>Congrats{``}! </h2>
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