import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import { Switch, Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Start from './components/Start';
import './App.css';
import End from './components/End'


function App() {
  return (
    <div className="App">
     <NavBar />
    <div className="content">

     
      <Switch>
        <Route exact path='/' component={Start} />
        <Route path="/login" component={Login} /> 
        <Route path="/signup" component={Signup} /> 
        <Route exact path='/end' component={End} />
      </Switch>
  
    </div>
  </div>
  );
}

export default App;
