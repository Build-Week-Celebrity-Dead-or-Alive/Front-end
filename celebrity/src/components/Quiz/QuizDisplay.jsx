import React, { useState } from "react";
import styled from "styled-components";
import End from "../End";
import { Modal } from "semantic-ui-react";
import Button from "../Button";

//test comment

const StyledQuizDisplay = styled.div`
  width: 30vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  .flashcard {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;

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
    }
    #alive {
      background-color: green;
      color: white;
    }
  }
  .modal {
    display: none; /*Hidden by default */
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
      width: 80%; /* Could be more or less, depending on screen size */
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

export default function QuizDisplay(props) {
  const {
    currentCard,
    setCurrentCard,
    quizHistory,
    setQuizHistory,
    currentAnswer,
    setCurrentAnswer,
    celebList,
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
    let minStr = minutes.toString().padStart(2, '0');
    let secRStr = secondsRemainder.toString().padStart(2, '0');
    return (`${minStr}:${secRStr}`);
  }

  function nextCard(eTargetId) {
    let answer = checkAnswer(eTargetId);
    setQuizHistory(quizHistory.concat({ name: currentCard.name, correct: answer }));
    setCurrentAnswer(answer ? 'correct' : 'incorrect');
    if (limitQs < 20) {
      setID(Math.floor(Math.random() * (51 - 1 + 1)) + 1);
    } else {
      setGameActive(false);
      gameOverModal.style.display = "block";
    }
  }

  function checkAnswer(answer) {
    return (currentCard.isDead === (answer === 'dead') ? true : false);
  }

  const onBtnClick = e => {
    setLimitQs(limitQs + 1);
    nextCard(e.target.id);
  }

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
          <h1>GAME OVER!!</h1>
          <p>Score:{getCurrentScore()}</p>
          <p>Time: {secondsToMinutes(gameTimer)}</p>
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
