import React from 'react'
import Button from './Button'

const StartScreen = () => {
  let isNameHere = window.localStorage.getItem("SignUpCred") || ""

  return (
    <div className='start-screen'>
      <header className='start-content'>
        {isNameHere === "" ? null : <h2>Welcome {isNameHere}!</h2>}
        <h2>
         dfgfdgdfgfd gfdg dfgfd gfdg fdg fdg dfgfd gfdg dfg fdgdf
        </h2>
        <h3>dfgfedgfdgfdg g dfg fd gfdgfd gdf gdf gfd</h3>
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