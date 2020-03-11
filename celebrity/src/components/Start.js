import React from 'react'
import Button from './Button'
import styled from 'styled-components';

const StyledGameContainer = styled.div`
  background: #c21500; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #c21500, #ffc500); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #c21500, #ffc500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
  margin-top: -5vh;
  h1 {
    margin-left: -6.5rem;
    font-family: 'Rock Salt', cursive;
    font-size: 4rem;
  }
`;

const StartScreen = () => {
  let isNameHere = window.localStorage.getItem("SignUpCred") || "";

  return (
    <StyledGameContainer>
      <header className='start-content'>
        {isNameHere === "" ? null : <h2>Welcome {isNameHere}!</h2>}
        <h1>Dead Or Alive</h1>
        <h3>
          Test your knowledge of Celebrity's Dead or Alive
        </h3>
        <p>Identify of which famous Celebritys are alive or are dead</p>
      </header>

      <div className="buttons">
        <Button buttonText={"START PLAYING"} pathName={"play"} />

        {isNameHere === "" ? ( <Button buttonText={"signup"} pathName={"signup"} />) : null}
        {/* {isNameHere === "" ? ( <Button buttonText={"login"} pathName={"login"} /> */}
      
      </div>
    </StyledGameContainer>
  )
}

export default StartScreen;
