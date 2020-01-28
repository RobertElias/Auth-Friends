import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card } from "./Card";

export const FriendsList = () => {
  return (
    <div>
      <h1>This is your FriendsList:</h1>
      <Card></Card>
    </div>
  );
};

export default FriendsList;
