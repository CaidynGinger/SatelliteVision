import React from "react";

import classes from "./SideNav.module.css";
import LinkButton from "./UI/Link";

const SideNav = () => {
  const linksList = [
    {
      id: "0",
      iconName: "rocket",
      linkName: "Dash Board",
      link: '/'
    },
    {
      id: "1",
      iconName: "grid",
      linkName: "Dash Board",
      link: '/'
    },
    {
      id: "2",
      iconName: "podium",
      linkName: "Compare Satellites",
      link: '/comparison'
    },
    {
      id: "3",
      iconName: "time",
      linkName: "Satellite timeline",
      link: '/'
    },
  ];
  return (
    <div className={classes.sidenav}>
      <nav>
        <ul className={classes.links_list}>
          {linksList.map((item) => {
            return (
              <LinkButton to={item.link} key={item.id} id={item.id} iconName={item.iconName} linkName={item.linkName} />
            );
          })}
        </ul>
      </nav>
      {/* <h3>copy write</h3> */}
    </div>
  );
};

export default SideNav;
