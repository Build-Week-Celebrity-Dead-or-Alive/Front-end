import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import CelebCard from './CelebCard';
import Timebar from './Timer';
import QuizDisplay from "../components/Quiz/QuizDisplay";
// import QuizHistory from "../components/Quiz/QuizHistory";
import styled from "styled-components";


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


const GameScreen = () => {
  const randomID = () => {
    const onBtnClick = e => {
      if (e.target.id === "dead" && currentCard.isDead) {
        setQuizHistory(
          quizHistory.concat({ name: currentCard.name, correct: true })
        );
        setCurrentAnswer("correct");
        if (currentCard.id <= randomID.length) {
          setCurrentCard(randomID[currentCard.id + 1]);
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
    
    return Math.floor(Math.random() * 80 + 1)
  }


  const [data, setData] = useState({})
  const [id, setId] = useState(Math.floor(Math.random() * 80 + 1))
  const [score, setScore] = useState(0)
  const [guesses, setGuesses] = useState(0)
 const [time, setTime] = useState(false)
  const [wrongDead, setWrongDead] = useState(false)
  const [Alive, setAlive] = useState(false)


  useEffect(() => {
    axios
      .get(
        `https://celebs-dead-or-alive.herokuapp.com/celebs/${id}`
      )
      .then((e) => {
        e.status ? setData(e.data) : console.log("This shouldn't show up")
      })
      .catch((err) => {
        console.log('Something isnt working', err)
        setId(randomID())
      })
  }, [id])

  useEffect(() => {
    const timer = setTimeout(() => setTime(true), 1500000)
    return () => clearTimeout(timer)
  }, [])

 
  const isDead = (deathCheck) => {
    if (deathCheck > 0) {
   
      setScore(score + 1)
      setWrongDead(false)
    } else {
      setWrongDead(true)
    }
 
    setId(randomID())
    setGuesses(guesses + 1)
  }

  //Checks for Alive case on Click
  const isAlive = (aliveCheck) => {
    if (aliveCheck == 0) {
      //true case, reward one point
      setScore(score + 1)
      setAlive(false)
    } else {
      setAlive(true)
    }
    //move to next card
    setId(randomID())
    setGuesses(guesses + 1)
  }

  window.localStorage.setItem('CorrectGuesses', JSON.stringify(score))
  window.localStorage.setItem('TotalGuesses', JSON.stringify(guesses))



  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizHistory, setQuizHistory] = useState([]);
  const [ celebList, setCelebList ] = useState([]);
  const [currentCard, setCurrentCard] = useState([id]);





  return (
    <div className='play-screen'>
      <Route
        path='/play'
        render={() =>
          time ? (
            <Redirect to='/end' />
          ) : (
            <div className='play-content'>
              <div className='score-status'>
                <h3>Guesses:&nbsp;&nbsp; {guesses}</h3>
                <h3>Correct Guesses:&nbsp;&nbsp; {score}</h3>
              </div>
              <Timebar />
              {data ? <CelebCard data={data} /> : <div>Loading...</div>}

         {/* <QuizDisplay
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            celebList={celebList}
            quizHistory={quizHistory}
            setQuizHistory={setQuizHistory}
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswer}
            /> */}




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
      <button
                onClick={() => isDead(data.died)}
                className={wrongDead ? 'wrong' : ''}>
                Dead
              </button>
        <p>or</p>
        <button id='alive'
                onClick={() => isAlive(data.isDead)}
                className={Alive ? 'wrong' : ''}
              >
                Alive
              </button>
      </div>
    </StyledQuizDisplay>
  



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
      <div className="doabuttons"></div>
              <button
                onClick={() => isDead(data.died)}
                className={wrongDead ? 'wrong' : ''}>
                Dead
              </button>
              <p>or</p>
              <button id='alive'
                onClick={() => isAlive(data.isDead)}
                className={Alive ? 'wrong' : ''}
              >
                Alive
              </button>
              </StyledQuizDisplay>
            </div>
          )
         }
      />
    </div>
  
  )
  }
export default GameScreen







