import React from "react";
import styled from "styled-components";
import End from "../End";

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
`;

export default function QuizDisplay(props) {
  const {
    currentCard,
    setCurrentCard,
    mockCelebList,
    quizHistory,
    setQuizHistory,
    currentAnswer,
    setCurrentAnswer,
    celebList,
    gameTimer
  } = props;

  const onBtnClick = e => {
    if (e.target.id === "dead" && currentCard.isDead) {
      setQuizHistory(
        quizHistory.concat({ name: currentCard.name, correct: true })
      );
      setCurrentAnswer("correct");
      if (currentCard.id <= mockCelebList.length) {
        setCurrentCard(mockCelebList[currentCard.id + 1]);
      } else {
        console.log("game ova");
      }
    } else {
      setQuizHistory(
        quizHistory.concat({ name: currentCard.name, correct: false })
      );
      setCurrentAnswer("incorrect");
    }

    document.querySelector(".flashcard-inner").style.transform =
      "rotateY(180deg)";
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
        <div className="game-timer">
          {gameTimer}
        </div>
      </div>
    </StyledQuizDisplay>
  );
}
