import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//import { axiosWithAuth } from '../utils/axiosWithAuth';

export const AddFriend = props => {
  const [form, setForm] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  return (
    <div>
      <h1>This is your AddFriend Form:</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          axiosWithAuth()
            .post("/api/friends", form)
            .then(res => {
              console.log(res);
              props.history.push("./friendsList");
            })
            .catch(error => console.log(error));
        }}
      >
        <input
        //   type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <input
          type="text"
          type="text"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <button type="submit">Add A Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
