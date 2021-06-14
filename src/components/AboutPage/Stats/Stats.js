import React, { Fragment, useState } from "react";
import experienceImg from "../../../assets/experience.png";
import dishImg from "../../../assets/menu.png";
import staffImg from "../../../assets/staff.png";
import customersImg from "../../../assets/customers.png";
import classes from "./Stats.module.css";
const experienceStats = [
  {
    id: 121,
    title: "Years of experience",
    number: 20,
    imgUrl: experienceImg,
  },
  {
    id: 232,
    title: "Available dishes",
    number: 60,
    imgUrl: dishImg,
  },
  {
    id: 828,
    title: "Qualificated staff",
    number: 40,
    imgUrl: staffImg,
  },
  {
    id: 989,
    title: "Happy customers",
    number: 10000,
    imgUrl: customersImg,
  },
];

const Stats = () => {
  const [baseNumExp, setBaseNumExp] = useState(0);
  const [baseNumDish, setBaseNumDish] = useState(0);
  const [baseNumStaff, setBaseNumStaff] = useState(0);
  const [baseNumCustomers, setBaseNumCustomers] = useState(0);

  const handleChangeTime = () => {
    experienceStats.forEach((itm) => {
      const maxNumber = itm.number;
      const handleAdd = maxNumber / 20;
      switch (itm.title) {
        case "Years of experience":
          if (baseNumExp < maxNumber) {
            setBaseNumExp(Math.ceil(baseNumExp + handleAdd));
          } else return;
          break;
        case "Available dishes":
          if (baseNumDish < maxNumber) {
            setBaseNumDish(Math.ceil(baseNumDish + handleAdd));
          } else return;
          break;
        case "Qualificated staff":
          if (baseNumStaff < maxNumber) {
            setBaseNumStaff(Math.ceil(baseNumStaff + handleAdd));
          } else return;
          break;
        case "Happy customers":
          if (baseNumCustomers < maxNumber) {
            setBaseNumCustomers(Math.ceil(baseNumCustomers + handleAdd));
          } else return;
          break;
        default:
          return;
      }
    });
  };
  let timeOutId;

  if (
    baseNumExp === 20 &&
    baseNumDish === 50 &&
    baseNumStaff === 40 &&
    baseNumCustomers === 10000
  ) {
    clearTimeout(timeOutId);
  }
  timeOutId = setTimeout(handleChangeTime, 100);
  const stats = experienceStats.map(({ id, title, number, imgUrl }) => (
    <div key={id}>
      <div className={classes.SingleStat}>
        <img src={imgUrl} alt='experience, staff, customers' />
        <p className={classes.StatNumber} data-target={number}>
          {title === "Years of experience"
            ? baseNumExp
            : title === "Available dishes"
            ? baseNumDish
            : title === "Qualificated staff"
            ? baseNumStaff
            : title === "Happy customers"
            ? baseNumCustomers
            : null}
        </p>
        <h5>{title}</h5>
      </div>
    </div>
  ));
  return <Fragment>{stats}</Fragment>;
};

export default Stats;
