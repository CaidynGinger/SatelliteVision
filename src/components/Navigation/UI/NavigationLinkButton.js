import React from "react";
import { Link } from "react-router-dom";

import "../Navigation.module.css";

export const NavigationLinkButton = (props) => {
  return (
    <li>
      <Link to={props.to}>
        <div>
          <ion-icon name={props.iconName}></ion-icon>
          <p>{props.linkName}</p> 
        </div>
      </Link>
    </li>
  );
};
