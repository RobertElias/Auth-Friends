import React from "react";
//import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // make a post request to server
    // the server will authenticate the use
    // based on the users credentials
    // If user can't be authenticated server will return a token...
    //using local storage
    axiosWithAuth().post("/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendslist");
        console.log(res.data.payload);
      })
      .catch(err => console.log("There was an error", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
