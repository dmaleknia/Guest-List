import React from 'react';
import { useState } from 'react';

const RSVP = (props) => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <span>
      RSVP to: {props.eventName}<br />
      Name <input value={name} onChange={setName}></input><br />
      Email <input value={email} onChange={setEmail}></input>
    </span>
  );
}

export default RSVP;