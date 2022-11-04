import React, { useRef, useState } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  // using refs to connect the final value of the input(when submited) to these refs
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // adding error state to be able to manage the errors
  const [error, setError] = useState();

  // handleing the submit event
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // setting the state error with different types of errors
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // forcing the entered age for the condition to be a number with the + cast
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // we pass the state up (we call the method form the parrent element to add a new user to the list managed in the App.js)
    props.onAddUser(enteredName, enteredUserAge);
    // "manipulating the DOM"
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
