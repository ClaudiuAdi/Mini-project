import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  // method which updates the state of the list of users, updates received every time a user is added in the AddUser component
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  // managing the states and being a (conductor) for the 2 components
  return (
    <div>
      {/* receiving every time a user is added*/}
      <AddUser onAddUser={addUserHandler} />
      {/* passing down the list to users to be displayed*/}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
