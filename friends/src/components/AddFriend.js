import React, { useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
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
    <div className="form1">
      
      <Form className="form"
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
        <Label for="Name">Name:</Label>
        <Input
          //   type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <Label for="Age">Age:</Label>
        <Input
          type="text"
          type="text"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <Label for="exampleEmail">Email:</Label>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={e => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
        <Button type="submit" color="info">Add A Friend</Button>
      </Form>
    </div>
  );
};

export default AddFriend;
