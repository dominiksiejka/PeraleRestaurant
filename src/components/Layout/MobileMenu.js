import React, { Fragment, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MobileMenu.module.css";

import { NavLink } from "react-router-dom";
const MobileMenu = ({ activeMenu, cart, handleHideMenu }) => {
  const showMenu = activeMenu ? classes.showMenu : null;
  const [inputValue, setInputValue] = useState("");
  let timeOutId;
  const handleChangeInput = (event) => {
    setInputValue(event.currentTarget.value);

    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      setInputValue("");
    }, 3000);
  };
  return (
    <Fragment>
      <div
        style={activeMenu ? { display: "block" } : { display: "none" }}
        className={classes.MobileMenu}
      ></div>
      <div className={[classes.MobileMenuContent, showMenu].join(" ")}>
        <div>
          <h1>Perale</h1>
          <ul className={classes.MobileNav}>
            <li>
              <input
                value={inputValue}
                onChange={handleChangeInput}
                type='text'
                placeholder='search'
              />
            </li>
            <li onClick={handleHideMenu}>
              <NavLink activeClassName={classes.active} to='/' exact>
                <i className='fas fa-home'></i>
                Home
              </NavLink>
            </li>
            <li onClick={handleHideMenu}>
              <NavLink activeClassName={classes.active} to='/about'>
                <i className='fas fa-address-card'></i>
                About
              </NavLink>
            </li>
            <li onClick={handleHideMenu}>
              <NavLink activeClassName={classes.active} to='/shop' exact>
                <i className='fas fa-shopping-basket'></i>
                Shop
              </NavLink>
            </li>
            <li onClick={handleHideMenu}>
              <NavLink activeClassName={classes.active} to='/contact' exact>
                <i className='fas fa-phone'></i>
                Contact
              </NavLink>
            </li>
          </ul>
          <section className={classes.CartContainer}>
            <HeaderCartButton onClick={cart} />
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
