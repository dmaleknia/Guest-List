import React from 'react';
import { useState } from 'react';

const RSVP = (props) => {

  const [name, setName] = useState();


  return (
    <span>
      <div>RSVP to: {props.eventName}</div>
      Name <input value={name} onChange={setName}></input>
    </span>
  );
}

export default RSVP;