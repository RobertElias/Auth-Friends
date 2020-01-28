import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Install Private Route</h1>

        <ul>
          <Link to="">Login</Link>
          <Link to="">Add Friends Page</Link>
        </ul>
        <Switch>
          <Route exact path="/friends" component="" />
          <Route path="login" component="login"/>
          <Route component="login"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
