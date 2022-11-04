import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

// displaying the users received
function UsersList(props) {
  return (
    <Card className={`${classes.users}`}>
      <ul>
        {/* receiving an array of users and adding a 'card' for every user in the list */}
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
