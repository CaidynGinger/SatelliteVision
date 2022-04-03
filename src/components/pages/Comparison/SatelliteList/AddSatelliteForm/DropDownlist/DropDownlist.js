import React from "react";

import classes from "./DropDownList.module.css";
import { Item } from "./UI/Item";

export const DropDownList = (props) => {
  return (
    <div className={classes.drop_down_list}>
      {props.satelliteNamesList.map((item, index) => {
        return <Item key={index} onClick={props.onClick} name={item.name} id={item.id} />;
      })}
    </div>
  );
};
