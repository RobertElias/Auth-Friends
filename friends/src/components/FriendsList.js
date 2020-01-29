import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card } from "./Card";

export const FriendsList = (props) => {
    const [friends, setFriends] = useState();
    
    useEffect(() => {
        localStorage.getItem('token') &&
        axiosWithAuth().get('/api/friends')
          .then(res => {
            setFriends(res.data)
          })
          .catch(err => console.log(err))
      }, [])
      console.log(friends)
  return (
    <div>
      <h1>This is your FriendsList:</h1>
      {friends ? friends.map((item, index) => {
               return <Card item={item} key={index} />

           }):
            <h3>Loading Friends List...</h3>
           }
    </div>
  );
};

export default FriendsList;
