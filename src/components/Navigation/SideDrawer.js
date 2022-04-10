import React from "react";
import { NavigationLinkButton } from "./UI/NavigationLinkButton";

import classes from "./Navigation.module.css";
import { Button } from "../UI/Button/Button";
import { useAuth0 } from "@auth0/auth0-react";

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

export const SideDrawer = ({username}) => {
  const { logout } = useAuth0();
  return (
    <div className={classes.side_nav}>
      <h1>Satellite Vision</h1>
      <h3>Hello {username}</h3>
      <div className={classes.logo_icon}>
        <ion-icon name="rocket-outline"></ion-icon>
      </div>
      <h2>find out all about Satellites</h2>
      <hr />
      {/* <div>
        <h2>user name</h2>
        <ion-icon name="person-outline"></ion-icon>
      </div>
      <hr/> */}
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
        <div className={classes.logoutBtn_container}>
          <Button
            buttonTitle={"Log Out"}
            onClick={() => logout({ returnTo: window.location.origin })}
          />
        </div>
      </nav>
    </div>
  );
};
