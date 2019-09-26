import React, { useState } from "react";
import CelebrityCard from "./CelebrityCard";
import QuizDisplay from "./QuizDisplay";
import QuizHistory from "./QuizHistory";
import styled from "styled-components";
// import axios from 'axios';

const StyledGameContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function GameContainer(props) {
  const mockCelebList = [
    {
      id: 0,
      name: "Tupac Shakur",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Tupac_Amaru_Shakur2.jpg/220px-Tupac_Amaru_Shakur2.jpg",
      info: "An American Rapper",
      born: 1971,
      died: 1996,
      isDead: 1
    },
    {
      id: 1,
      name: "Notorious B.I.G",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/The_Notorious_B.I.G.jpg/240px-The_Notorious_B.I.G.jpg",
      info: "Considered to be one of the greatest rappers of all time.",
      born: 1972,
      died: 1997,
      isDead: 1
    },
    {
      id: 2,
      name: "Prince",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Prince_at_Coachella_%28cropped%29.jpg/220px-Prince_at_Coachella_%28cropped%29.jpg",
      info:
        "American singer, songwriter, musician, record producer, dancer, actor, and filmmaker.",
      born: 1958,
      died: 2016,
      isDead: 1
    },
    {
      id: 3,
      name: "Eminem",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Eminem_live_at_D.C._2014_%28cropped%29.jpg/245px-Eminem_live_at_D.C._2014_%28cropped%29.jpg",
      info:
        "Rapper, songwriter, record producer, record executive, film producer, and actor.",
      born: 1972,
      died: null,
      isDead: 0
    }
  ];
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizHistory, setQuizHistory] = useState([]);
  const [celebList, setCelebList] = useState([]);
  const [currentCard, setCurrentCard] = useState(mockCelebList[0]);
  const [gameTimer, setGameTimer] = useState(0);

  // Instantiate the timer
  useEffect(() => {
    let timer = setInterval(() => {
      setGameTimer(gameTimer => gameTimer + 1);
    }, 1000);
    return () => clearInterval(timer);
  })


  //   useEffect(() => {
  //     axios.get('https://celebs-dead-or-alive.herokuapp.com/celebs')
  //     .then(res => {
  //         setCelebList(celebList.push(res.data));
  //         console.log(celebList)
  //     })
  //     .catch(err => {
  //         debugger
  //     })
  //   }, []);

  return (
    <StyledGameContainer>
      <CelebrityCard currentCard={currentCard} />
      <QuizDisplay
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        mockCelebList={mockCelebList}
        celebList={celebList}
        quizHistory={quizHistory}
        setQuizHistory={setQuizHistory}
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        gameTimer={gameTimer}
      />
      <QuizHistory quizHistory={quizHistory} mockCelebList={mockCelebList} />
    </StyledGameContainer>
  );
}
