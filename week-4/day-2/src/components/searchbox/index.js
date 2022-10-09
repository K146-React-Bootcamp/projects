import React from "react";
import classes from "./style.module.css";


export default function Searchbox() {
  return (
    <div className={classes.searchboxWrapper}>
      <input className={classes.input} placeholder="Ürün ara..."/>
    </div>
  )
}