import React, { Fragment } from "react";
import classes from "./Home.module.css";
import mealsImage from "../../assets/meals.jpg";
import chiefImg from "../../assets/chiefHome.jpg";
import homePageImg from "../../assets/homePage.jpg";
import birthday from "../../assets/birthday.png";
import meeting from "../../assets/meeting.png";
import wedding from "../../assets/wedding.png";
import Slider from "./Slider";
const Home = () => {
  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <section className={classes.summary}>
          <h2>Quality and Delicious Food</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </section>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
      <section className={classes.HomeContainer}>
        <article className={classes.HomeHistory}>
          <div className={classes.homeImages}>
            <img src={chiefImg} alt='chief cooking' />
            <img src={homePageImg} alt='fresh steaks with pepper' />
          </div>
          <div className={classes.homeRestaurant}>
            <h2>
              <span>Perale </span>Restaurant
            </h2>
            <p>
              Our history started in 1990 in Manchester, small elegant
              restaurant with traditions. Serving our clients with delicious
              dishes and spreading our passion to cooking across them, made it
              possible for us to grow. Today we have over 50 resturants in the
              United Kingdom and 8 in Poland. We believe that serving fresh and
              high quality food delivers kindly experience to our clients.
            </p>
          </div>
        </article>
        <article className={classes.Services}>
          <h2>Catering Services</h2>
          <div className={classes.listOfServices}>
            <div>
              <img src={birthday} alt='birthday party' />
              <h4>Birthday Party</h4>
              <p>
                Celebrate your special day with your family and friends enjoying
                the taste of our delicious dishes served directly to you.
              </p>
            </div>
            <div>
              <img src={meeting} alt='birthday party' />
              <h4>Business Meetings</h4>
              <p>
                With our special food we can help you to make any business deal
                on demand. There is plenty to choose from.
              </p>
            </div>
            <div>
              <img src={wedding} alt='birthday party' />
              <h4>Wedding Party</h4>
              <p>
                Make one of the most important days in your life even more
                special. Trust our years of experience. Do not worry about your
                guests food.
              </p>
            </div>
          </div>
        </article>
        <Slider />
      </section>
    </Fragment>
  );
};

export default Home;
