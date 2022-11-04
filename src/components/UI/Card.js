import React from "react";

import classes from "./Card.module.css";

function Card(props) {
  return (
    // setting css module styles and adding styles from props
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
