import React from "react";
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export function DisplayCard(props) {
  console.log(props);

  return (
    <div className="formcard">
      <Card className="form3">
      <CardBody class="cardbody">
          <CardTitle>Friends List</CardTitle>
          <CardSubtitle>Name: {props.item.name}</CardSubtitle>
          <CardSubtitle>Age: {props.item.age}</CardSubtitle>
          <CardSubtitle>Email: {props.item.email}</CardSubtitle>  
        </CardBody>
      </Card>
      
    </div>
  );
}
