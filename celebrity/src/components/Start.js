import React from 'react'
import Button from './Button'

const StartScreen = () => {
  let isNameHere = window.localStorage.getItem("SignUp") || ""

  return (
    <div className='start-screen'>
      <header className='start-content'>
        {/* {isNameHere === "" ? null : <h2>Welcome {isNameHere}!</h2>} */}
        <h1>Dead<br /> Or
        <br /> Alive</h1>
        <h3>
         Test your knowledge of Celebrity's Dead or Alive
        </h3>
        <p>Identify of which famous Celebritys are alive or are dead</p>
      </header>
      <div className='buttons'>
        <Button buttonText={'START PLAYING'} pathName={'play'} />
        {isNameHere === "" ? <Button buttonText={'signup'} pathName={'signup'} /> : null}
        {isNameHere === "" ? <Button buttonText={'login'} pathName={'login'} /> : null}
      </div>
    </div>
  )
}

export default StartScreen