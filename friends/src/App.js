import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Install Private Route</h1>

        <ul>
          <Link to="/login">Login</Link>

          <Link to="/friendslist">Friends List</Link>
          <Link to="/addfriend">Add Friend</Link>
        </ul>
        <Switch>
          <PrivateRoute path="/friendslist" component={FriendsList} />
          <PrivateRoute path="/addfriend" component={AddFriend} />
          {/* addFriendsForm */}
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
