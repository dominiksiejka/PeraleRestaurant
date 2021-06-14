import React from "react";
import Stats from "./Stats/Stats";
import aboutImg from "../../assets/about.jpg";
import classes from "./AboutPage.module.css";
import StaffList from "./StaffList/StaffList";

const AboutPage = () => {
  return (
    <section className={classes.AboutPage}>
      <header className={classes.AboutHeader}>
        <div className={classes.AboutBackground}>
          <img src={aboutImg} alt='about page background' />
          <div className={classes.titles}>
            <h1>About Us</h1>
            <p>
              We are people with passion, making sure we are serving the best
              quality food and outstanding services to our clients.
            </p>
          </div>
        </div>
      </header>
      <article className={classes.stats}>
        <Stats />
      </article>
      <StaffList />
    </section>
  );
};

export default AboutPage;
