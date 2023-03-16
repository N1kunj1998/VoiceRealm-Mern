import React from "react";
import styles from "./Button.module.css";
import ArrowFrowardIcon from "@material-ui/icons/ArrowForward";

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <ArrowFrowardIcon />
    </button>
  );
};

export default Button;
