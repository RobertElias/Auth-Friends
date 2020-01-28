import React from "react";
//import { axiosWithAuth } from '../utils/axiosWithAuth';

export const AddFriend = () => {
  return (
    <div>
      <h1>This is your AddFriend Form:</h1>
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
};

export default AddFriend;
