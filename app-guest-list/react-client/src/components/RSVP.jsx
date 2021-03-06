import React from 'react';
import { useState } from 'react';
import NumericInput from 'react-numeric-input';

import axios from 'axios';

const RSVP = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState();
  const [view, setView] = useState('presubmit');
  const eventID = props.id;

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const submitRSVP = () => {
    axios.post('/rsvps', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      guests: guests,
      eventID: eventID
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setView('postsubmit');
  }

  const renderView = () => {
    if (view === 'postsubmit') {
      return (
        <span>
          Thank you for your RSVP! See you on the dance floor!
        </span>
      );
    } else {
      return (
        <span>
          <h1 id='eventHeader'>RSVP to: {props.eventName}</h1><br />
          First Name: <input value={firstName} onChange={handleFirstNameChange}></input><br />
          Last Name: <input value={lastName} onChange={handleLastNameChange}></input><br />
          Email: <input value={email} onChange={handleEmailChange}></input><br />
          Guests: <NumericInput min={0} max={4} value={guests} onChange={setGuests} /><br />
          <br /><a className='submitRSVP' onClick={submitRSVP}><span>Submit RSVP</span></a>
        </span>
      );
    }
  }

  return (
    renderView()
  );
}

export default RSVP;