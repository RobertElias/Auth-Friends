import React from "react";

export function Card(props) {
  console.log(props);

  return (
    <div>
      <h1>Name: {props.item.name}</h1>
      <p>Age: {props.item.age}</p>
      <p>Email: {props.item.email}</p>
    </div>
  );
}
