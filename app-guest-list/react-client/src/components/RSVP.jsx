import React from 'react';
import { useState } from 'react';
import NumericInput from 'react-numeric-input';

const RSVP = (props) => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [guests, setGuests] = useState();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  // const handleGuestsChange = (event) => {
  //   setGuests(event.target.value);
  // }

  return (
    <span>
      RSVP to: {props.eventName}<br />
      First Name: <input value={firstName} onChange={handleFirstNameChange}></input><br />
      Last Name: <input value={lastName} onChange={handleLastNameChange}></input><br />
      Email: <input value={email} onChange={handleEmailChange}></input><br />
      Guests: <NumericInput min={0} max={4} value={guests} onChange={setGuests} />
    </span>
  );
}

export default RSVP;