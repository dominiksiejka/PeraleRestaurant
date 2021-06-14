import React, { Fragment, useEffect, useState } from "react";

import HeaderCartButton from "./HeaderCartButton";

import HeaderMenu from "./HeaderMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import classes from "./Header.module.css";

const Header = (props) => {
  const [isActiveUl, setIsActiveUl] = useState(false);
  const [activeBurger, setActiveBurger] = useState();
  const stylesForUl = {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 0 5px 1px black",
  };
  const handleChangeMenu = isActiveUl ? stylesForUl : null;
  useEffect(() => {
    window.onscroll = function (event) {
      if (event.currentTarget.scrollY > 200) {
        setIsActiveUl(true);
      } else if (event.currentTarget.scrollY < 200 && isActiveUl) {
        setIsActiveUl(false);
      }
    };
  }, [isActiveUl]);
  useEffect(() => {
    const mq = window.matchMedia("(min-width:600px)");
    setActiveBurger(mq.matches);
    const handleChangeMenu = (event) => {
      if (event.matches) {
        setActiveBurger(true);
      } else {
        setActiveBurger(false);
      }
    };
    mq.addEventListener("change", handleChangeMenu);
  }, []);
  return (
    <Fragment>
      <header className={classes.header} style={handleChangeMenu}>
        <h1 style={isActiveUl ? { color: "black", textShadow: "none" } : null}>
          Perale
        </h1>
        {activeBurger ? (
          <HeaderMenu />
        ) : (
          <HeaderMobileMenu cart={props.onShowCart} activeUl={isActiveUl} />
        )}
        {activeBurger && (
          <HeaderCartButton onClick={props.onShowCart} isActive={isActiveUl} />
        )}
      </header>
    </Fragment>
  );
};

export default Header;
