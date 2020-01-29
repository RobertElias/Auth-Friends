import React from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendslist");
        console.log(res.data.payload);
      })
      .catch(err => console.log("There was an error", err));
  };

  render() {
    return (
      <div className="form1">
        
        <Form className="form" onSubmit={this.login}>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <Button type="submit" color="info">
            Log in
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
