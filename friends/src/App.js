import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "reactstrap";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar className="nav" color="light" light expand="md">
        <ul>
          <Link to="/login">Login</Link>

          <Link to="/friendslist">Friends List</Link>
          <Link to="/addfriend">Add Friend</Link>
        </ul>
        </Navbar>
        
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
