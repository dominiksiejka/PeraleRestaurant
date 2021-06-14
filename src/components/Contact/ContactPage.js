import React from "react";
import classes from "./ContactPage.module.css";

const ContactPage = () => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <section className={classes.ContactPage}>
      <div className={classes.ContactContent}>
        <h1>Make Reservation</h1>
        <form action='#' onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor='name'>
              Name
              <input type='text' placeholder='Your Name' maxLength='23' />
            </label>
            <label htmlFor='email'>
              Email
              <input type='text' placeholder='Email' maxLength='23' />
            </label>
          </div>
          <div>
            <label htmlFor='phone'>
              Phone
              <input type='number' placeholder='Phone' />
            </label>
            <label htmlFor='date'>
              Date
              <input type='date' />
            </label>
          </div>
          <div>
            <label htmlFor='time'>
              Time
              <input type='text' placeholder='Time' />
            </label>
            <label htmlFor='person'>
              Person
              <select name='person-select' defaultValue='Person' id='person'>
                <option value='Person' disabled>
                  Person
                </option>
                <option value='one'>1</option>
                <option value='two'>2</option>
                <option value='three'>3</option>
                <option value='more'>4+</option>
              </select>
            </label>
          </div>
          <button type='submit'>Make a Reservation</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
