import React from 'react';
import { useState } from 'react';
import NumericInput from 'react-numeric-input';

const RSVP = (props) => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [guests, setGuests] = useState();

  return (
    <span>
      RSVP to: {props.eventName}<br />
      First Name: <input value={firstName} onChange={setFirstName}></input><br />
      Last Name: <input value={lastName} onChange={setLastName}></input><br />
      Email: <input value={email} onChange={setEmail}></input><br />
      Guests: <NumericInput min={0} max={4} value={guests} onChange={setGuests} />
    </span>
  );
}

export default RSVP;