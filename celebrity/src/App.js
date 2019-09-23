import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
    <div className="content">

     
      <Switch>
        <Route path="/login" component={Login} /> 
        <Route path="/signup" component={Signup} /> 
      </Switch>
  
    </div>
  </div>
  );
}

export default App;
