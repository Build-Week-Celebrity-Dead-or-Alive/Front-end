import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Start from "./components/Start";
import "./App.css";
import End from "./components/End";
import GameContainer from "./components/Quiz/GameContainer";
import PrivateRoute from "./components/PrivateRoute";





function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/end" component={End} />
          <Route exact path="/play" component={GameContainer} />
          <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Start} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}










          <PrivateRoute path="/NavBar" component={Start} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
