import React, { useState } from "react";
import styled from "styled-components";
import End from "../End";
import { Modal } from "semantic-ui-react";
import Button from "../Button";


const StyledQuizDisplay = styled.div`
  width: 30vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-evenly;
  border-radius: .3rem;
  height: 60vh;
  .flashcard {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;
    h1 {
          font-size: 10rem;
          margin: 0;
        }

    .flashcard-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;

      .flashcard-front,
      .flashcard-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        color: white;
        font-size: 2.5rem;

      }
      .flashcard-back {
        color: white;
        transform: rotateY(180deg);
      }
    }
  }

  .doabuttons {
    display: flex;
    align-items: center;
    color: white;
    #dead {
      background-color: red;
      color: white;
      width: 10vw;
    }
    #alive {
      background-color: green;
      color: white;
      width: 10vw;
    }
  }
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 50%; /* Could be more or less, depending on screen size */
      padding-bottom: 60px;
      h1 {
        font-family: "Orbitron", sans-serif;
        
        font-size: 3rem;
        margin-bottom: -25px;
      }
      button, a button {
        &:hover {
          background-color: white;
          color: black;
          border: black;
        }
      }
    }
  }
  .game-timer {
    background-color: white;
    width: 200px;
    margin-top: 2rem;
    border-radius: 10px;
    height: 3rem;
    padding-top: 1rem;
    font-family: "Orbitron", sans-serif;
    font-size: 3rem;
  }
`;

let arr = [];
let i = 0;

  while (arr.length < 21) {
    var r = Math.floor(Math.random() * 52) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }



export default function QuizDisplay(props) {
  const {
    currentCard,
    setCurrentCard,
    quizHistory,
    setQuizHistory,
    currentAnswer,
    setCurrentAnswer,
    celenList,
    getCurrentScore,
    gameTimer,
    limitQs,
    setLimitQs,
    setID,
    setGameActive
  } = props;

  const gameOverModal = document.querySelector("#gameOverModal");

  function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secondsRemainder = Math.floor(seconds % 60);
    let minStr = minutes.toString().padStart(2, "0");
    let secRStr = secondsRemainder.toString().padStart(2, "0");
    return `${minStr}:${secRStr}`;
  }

  function nextCard(eTargetId) {
    let answer = checkAnswer(eTargetId);
    setQuizHistory(
      quizHistory.concat({ name: currentCard.name, correct: answer })
    );
    setCurrentAnswer(answer ? "correct" : "incorrect");
    if (limitQs < 20 && i < 20) {
      setID(arr[i]);
    } else {
      setGameActive(false);
      gameOverModal.style.display = "block";
    }
  }

  function checkAnswer(answer) {
    return currentCard.isDead === (answer === "dead") ? true : false;
  }

  const onBtnClick = e => {
    i++;
    setLimitQs(limitQs + 1);
    nextCard(e.target.id);
  };

  return (
    <StyledQuizDisplay>
      <div className="flashcard">
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h1>?</h1>
          </div>
          <div className="flashcard-back">
            <h1>{currentAnswer}</h1>
          </div>
        </div>
      </div>
      <div className="doabuttons">
        <button id="dead" onClick={onBtnClick}>
          Dead
        </button>
        <p>or</p>
        <button id="alive" onClick={onBtnClick}>
          Alive
        </button>
      </div>
      <div className="game-timer">{secondsToMinutes(gameTimer)}</div>
      <div id="gameOverModal" class="modal">
        <div class="modal-content">
          <h1>GAME OVER</h1>
          <h2>SCORE: {getCurrentScore()}</h2>
          <h2>TIME: {secondsToMinutes(gameTimer)}</h2>
          <button
            buttonText={"PLAY AGAIN"}
            onClick={() => window.location.reload()}
          >
            PLAY AGAIN
          </button>
          <Button buttonText={"Log In"} pathName={"login"} />
          <Button buttonText={"Sign Up"} pathName={"signup"} />
        </div>
      </div>
    </StyledQuizDisplay>
  );
}
