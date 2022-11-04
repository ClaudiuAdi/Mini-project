import React, { useState } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  // defining the state for the 2 inputs username and age
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // adding error state to be able to manage the errors
  const [error, setError] = useState();

  // handleing the submit event
  const addUserHandler = (event) => {
    event.preventDefault();

    // setting the state error with different types of errors
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // forcing the entered age for the condition to be a number with the + cast
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // we pass the state up (we call the method form the parrent element to add a new user to the list managed in the App.js)
    props.onAddUser(enteredUsername, enteredAge);
    // we set the states to empty strings, but we need to add the 'value' property to the inputs for the change to be reflected in the inputs
    setEnteredUsername("");
    setEnteredAge("");
  };

  // function which is triggered for every keystroke in the username input element
  const usernameChangeHandler = (event) => {
    // setting the value through the target of the event(input for username) and the value property of the input to get the value
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // function that lets us change the state of error to null to be able to close the modal window
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* shortcircutting if the an error exists to display the modal*/}
      {error && (
        <ErrorModal
          // passing the custom modal title and content
          title={error.title}
          message={error.message}
          // passing the function that lets us close the modal to be managed by the child component
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername} //this value will be reflected in the input
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
