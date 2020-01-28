import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from './components/Login';
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Install Private Route</h1>

        <ul>
          <Link to="/login">Login</Link>
          <Link to="/friendsList">Friends List</Link>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friendsList" component={FriendsList} />
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
