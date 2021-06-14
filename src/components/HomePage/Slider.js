import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import classes from "./Slider.module.css";
const Slider = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://randomuser.me/api", {
        params: {
          results: 8,
        },
      });
      setFetchedData(response.data.results);
    };

    getData();
  }, []);
  let dataArray = null;
  if (fetchedData.length !== 0) {
    dataArray = fetchedData.map((user) => {
      const title = "customer".toUpperCase();
      return (
        <div key={user.name.last}>
          <img src={user.picture.large} alt='customer' />
          <p>
            Perfect place for all. The interior design and delicious dishes make
            this place special. The service is lovely with lots of help with
            passion to successfuly reach our demands.
          </p>
          <h4>
            {user.name.first} {user.name.last}
          </h4>
          <h5>{title}</h5>
        </div>
      );
    });
  }

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;

    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown = false;
  };
  const handleMouseUp = (e) => {
    isDown = false;
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.2;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  return (
    <Fragment>
      <h1 className={classes.sliderHeading}>Happy Customers</h1>
      <article
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className={classes.Reviews}
      >
        {dataArray}
      </article>
    </Fragment>
  );
};

export default Slider;
