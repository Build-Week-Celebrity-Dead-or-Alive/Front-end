import React, { useState, useEffect, useRef } from "react";
import CelebrityCard from "./CelebrityCard";
import QuizDisplay from "./QuizDisplay";
import QuizHistory from "./QuizHistory";
import styled from "styled-components";
import axios from "axios";

const StyledGameContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 92vh;
  background: #c21500; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #c21500, #ffc500); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #c21500, #ffc500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  align-items: center;
`;

export default function GameContainer(props) {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizHistory, setQuizHistory] = useState([]);
  const [celebList, setCelebList] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [gameTimer, setGameTimer] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const API = "https://celebs-dead-or-alive.herokuapp.com/celebs";
  const [id, setID] = useState(Math.floor(Math.random() * (51 - 1 + 1)) + 1);
  const [limitQs, setLimitQs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [idList, setIdList] = useState([]);


  useInterval(() => {
    if (gameActive) {
      setGameTimer(gameTimer + 1);
    }
  }, 1000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // get players current score
  function getCurrentScore() {
    let true_count = 0;
    // let total_count = celebList.length;
    let total_count = 20;
    quizHistory.forEach(element => {
      true_count += element.correct ? 1 : 0;
    });
    return `${true_count}/${total_count}`;
  }

  useEffect(() => {
    axios
      .get(API + '/' + id)
      .then(res => {
        setCurrentCard(res.data);
        //setCurrentCard(res.data[`${id}`]);
        //   res.data.map(celeb => setCelebList(celebList.push(celeb)))
        setLoading(false);
      })
      .catch(err => {
        debugger;
      });
  }, [id]);

  return (
    <StyledGameContainer>
      <CelebrityCard currentCard={currentCard} loading={loading} />
      <QuizDisplay
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        celebList={celebList}
        quizHistory={quizHistory}
        setQuizHistory={setQuizHistory}
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        getCurrentScore={getCurrentScore}
        gameTimer={gameTimer}
        setID={setID}
        id={id}
        limitQs={limitQs}
        setLimitQs={setLimitQs}
        setGameActive={setGameActive}
      />
      <QuizHistory
        quizHistory={quizHistory}
        getCurrentScore={getCurrentScore}
      />
    </StyledGameContainer>
  );
}
