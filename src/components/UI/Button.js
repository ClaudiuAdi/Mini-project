import React from "react";

import classes from "./Button.module.css";

// setting the style of the button from the css module and receiving the type from the parent component
function Button(props) {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
