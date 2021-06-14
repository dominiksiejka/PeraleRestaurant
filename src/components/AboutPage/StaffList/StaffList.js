import React, { Fragment } from "react";
import chief1 from "../../../assets/chief1.jpg";
import chief2 from "../../../assets/chief2.jpg";
import chief3 from "../../../assets/chief3.jpg";
import classes from "./StaffList.module.css";

const StaffList = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>Our Master Chef</h1>
      <article className={classes.staffContainer}>
        <div className={classes.singlePerson}>
          <img src={chief1} alt='Taylor Moore' />
          <h5>Taylor Moore</h5>
          <p>Head Chief</p>
          <button>
            <i className='fab fa-twitter'></i>
          </button>
          <button>
            <i className='fab fa-facebook-f'></i>
          </button>
          <button>
            <i className='fab fa-instagram'></i>
          </button>
        </div>
        <div className={classes.singlePerson}>
          <img src={chief2} alt='Evanesca Bloom' />
          <h5>Evanesca Bloom</h5>
          <p>Restaurant Owner</p>
          <button>
            <i className='fab fa-twitter'></i>
          </button>
          <button>
            <i className='fab fa-facebook-f'></i>
          </button>
          <button>
            <i className='fab fa-instagram'></i>
          </button>
        </div>
        <div className={classes.singlePerson}>
          <img src={chief3} alt='Luke Simon' />
          <h5>Luke Simon</h5>
          <p>Chef</p>
          <button>
            <i className='fab fa-twitter'></i>
          </button>
          <button>
            <i className='fab fa-facebook-f'></i>
          </button>
          <button>
            <i className='fab fa-instagram'></i>
          </button>
        </div>
      </article>
    </Fragment>
  );
};

export default StaffList;
