<<<<<<< HEAD
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Start from "./components/Start";
import "./App.css";
import End from "./components/End";
import GameContainer from "./components/Quiz/GameContainer";
=======
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Start from './components/Start';
import './App.css';
import End from './components/End'
import CelebrityCard from './components/Quiz/CelebrityCard';

>>>>>>> fa96cae469c8231df8747766cee3c129cdcee1d8

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/end" component={End} />
          <Route exact path="/quiz" component={GameContainer} />
        </Switch>
=======


        <Switch>
          <Route exact path='/' component={Start} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path='/end' component={End} />
          <Route exact path='/quiz' component={CelebrityCard} />
        </Switch>

>>>>>>> fa96cae469c8231df8747766cee3c129cdcee1d8
      </div>
    </div>
  );
}

export default App;
