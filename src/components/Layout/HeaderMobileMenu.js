import React, { Fragment, useState } from "react";
import MobileMenu from "./MobileMenu";
import classes from "./HeaderMobileMenu.module.css";

const HeaderMobileMenu = ({ cart, activeUl }) => {
  const [activeBurger, setActiveBurger] = useState(false);
  const handleShowMobileMenu = () => {
    if (activeBurger) {
      setActiveBurger(false);
    } else if (!activeBurger) {
      setActiveBurger(true);
    }
  };
  const isActive = activeBurger ? classes.Active : null;
  const isActiveUlColor = activeUl ? { backgroundColor: "black" } : null;

  return (
    <Fragment>
      <div onClick={handleShowMobileMenu} className={classes.BurgerMenu}>
        <span style={isActiveUlColor} className={isActive}></span>
        <span style={isActiveUlColor} className={isActive}></span>
        <span style={isActiveUlColor} className={isActive}></span>
      </div>
      <MobileMenu
        handleHideMenu={handleShowMobileMenu}
        activeMenu={activeBurger}
        cart={cart}
      />
    </Fragment>
  );
};

export default HeaderMobileMenu;
