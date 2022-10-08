import React from "react";
import classes from "./style.module.css";

export default function NoResult({ message = "", show = false, children }) {
  if (!show) return null;

  return <div className={classes.noResult}>
    <p>{message}</p>
    {children}
  </div>;
}
