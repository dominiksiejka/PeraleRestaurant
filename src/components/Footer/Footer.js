import React from "react";
import classes from "./Footer.module.css";
import insta from "../../assets/insta.jpg";
import insta2 from "../../assets/insta2.jpg";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.articles}>
        <article className={classes.Socials}>
          <h5>Perale</h5>
          <p>
            Serving high quality food with passion to cooking. Visit our social
            media to get more information about our latest offers.
          </p>
          <div className={classes.socialIcons}>
            <button>
              <i className='fab fa-facebook-f'></i>
            </button>
            <button>
              <i className='fab fa-instagram'></i>
            </button>
            <button>
              <i className='fab fa-twitter'></i>
            </button>
          </div>
        </article>
        <article className={classes.WorkingHours}>
          <h5>Open Hours</h5>
          <ul>
            <li>
              <p>Moday</p>
              <span>9:00 - 24:00</span>
            </li>
            <li>
              <p>Tuesday</p>
              <span>9:00 - 24:00</span>
            </li>
            <li>
              <p>Wednesday</p>
              <span>9:00 - 23:00</span>
            </li>
            <li>
              <p>Thursday</p>
              <span>9:00 - 24:00</span>
            </li>
            <li>
              <p>Friday</p>
              <span>9:00 - 02:00</span>
            </li>
            <li>
              <p>Saturday</p>
              <span>9:00 - 02:00</span>
            </li>
            <li>
              <p>Sunday</p>
              <span>9:00 - 02:00</span>
            </li>
          </ul>
        </article>

        <article className={classes.Instagram}>
          <h5>Instagram</h5>
          <div>
            <img src={insta} alt='instagram' />
            <img src={insta2} alt='instagram second' />
          </div>
        </article>
        <article className={classes.Newsletter}>
          <h5>Newsletter</h5>
          <p>
            Get the latest news and food offers directly from our kitchen with
            fancy discounts. Just subscribe !
          </p>
          <input type='text' placeholder='Enter your email' />
          <button type='submit'>Subscribe</button>
        </article>
      </div>
      <h4 className={classes.endTitle}>
        Copyright &copy;2021 designed and created by Dominik Siejka all rights
        reserved
      </h4>
    </footer>
  );
};

export default Footer;
