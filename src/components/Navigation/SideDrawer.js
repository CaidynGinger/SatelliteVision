import React from "react";
import { NavigationLinkButton } from "./UI/NavigationLinkButton";

import classes from "./Navigation.module.css";

const linksList = [
  {
    id: 0,
    iconName: "home-outline",
    linkName: "Dash Board",
    link: "/",
  },
  {
    id: 1,
    iconName: "podium-outline",
    linkName: "Compare Satellites",
    link: "compare",
  },
  {
    id: 3,
    iconName: "analytics-outline",
    linkName: "Satellites Timeline",
    link: "timeline",
  },
];

export const SideDrawer = () => {
  return (
    <div className={classes.side_nav}>
      <h1>Satellite Vision</h1>
      <div className={classes.logo_icon}>
        <ion-icon name="rocket-outline"></ion-icon>
      </div>
      <h2>find out all about Satellites</h2>
      <hr/>
      <nav>
        <ul className={classes.navigation_list}>
          {linksList.map((item) => {
            return (
              <NavigationLinkButton
                key={item.id}
                to={item.link}
                iconName={item.iconName}
                linkName={item.linkName}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
