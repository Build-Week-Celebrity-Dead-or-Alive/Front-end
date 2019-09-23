import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import { StyledGame } from "./AppStyles";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';

function App() {
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

  const [currentCard, setCurrentCard] = useState(mockCelebList[0]);
  const [answers, setAnswers] = useState([]);

  const onBtnClick = e => {
    if (currentCard.isDead && e.target.name === "dead") {
      setAnswers(answers.concat([[currentCard.name, "correct"]]));
      setCurrentCard(mockCelebList[currentCard.id + 1]);
    } else {
      setAnswers(answers.concat([[currentCard.name, "incorrect"]]));
      setCurrentCard(mockCelebList[currentCard.id + 1]);
    }
  };

  return (
    <Router>
      <Nav />
      <Route exact path='/' render={() => (

    <StyledGame>
      <Card currentCard={currentCard} onBtnClick={onBtnClick} />
      <ScoreBoard answers={answers} />
    </StyledGame>
      )}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </Router>
  );
}

export default App;
