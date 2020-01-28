import React from "react";

export function Card(props) {
  console.log(props);

  return (
    <div>
      <h3>Name: {props.item.name}</h3>
      <h3>Age: {props.item.age}</h3>
      <h3>Email: {props.item.email}</h3>
    </div>
  );
}
