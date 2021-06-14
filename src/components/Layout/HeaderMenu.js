import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./HeaderMenu.module.css";
const HeaderMenu = () => {
  const menuItems = ["Home", "About", "Shop", "Contact"];
  const items = menuItems.map((itm) => (
    <li key={itm}>
      <NavLink
        to={
          itm === "Home"
            ? "/"
            : itm === "About"
            ? "/about"
            : itm === "Shop"
            ? "/shop"
            : itm === "Contact"
            ? "/contact"
            : null
        }
        exact
        activeClassName={classes.Active}
      >
        {itm}
      </NavLink>
    </li>
  ));

  return <ul className={classes.MainMenu}>{items}</ul>;
};

export default HeaderMenu;
