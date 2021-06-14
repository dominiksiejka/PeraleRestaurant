import React, { Fragment } from "react";

import AvailableMeals from "./AvailableMeals";
import ShopImg from "../../assets/shop.jpg";
import classes from "./Meals.module.css";
const Meals = () => {
  return (
    <Fragment>
      <header className={classes.ShopHeader}>
        <div className={classes.shopTitle}>
          <h2>Our Shop</h2>
          <p>
            Pick the food you would like to order. We will serve you with the
            best quality.
          </p>
        </div>

        <img src={ShopImg} alt='shopHeader' />
      </header>
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
