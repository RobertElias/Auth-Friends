import React from "react";

export function Card(props) {
  console.log(props);

  return (
    <div>
      <h1>{props.item.name}</h1>
      <p>{props.item.age}</p>
      <p>{props.item.email}</p>
    </div>
  );
}
