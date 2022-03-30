import React from "react";
import { Link } from "react-router-dom";

import './link.css'

function LinkButton(props) {  
  return (
    <li key={props.id} className="link-container">
      <Link to={props.to}><ion-icon name={props.iconName}></ion-icon></Link>
    </li>
  );
}

export default LinkButton;
