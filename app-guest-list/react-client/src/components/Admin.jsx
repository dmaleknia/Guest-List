import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import DatePicker from 'react-datepicker';

const Admin = () => {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  }

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  }

  const submitEvent = () => {
    axios.post('/events', {
      name: name,
      location: location,
      date: date,
      startTime: startTime,
      endTime: endTime
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return(
    <span>
      <h1>Add an Event </h1>
      <section id='admin'>
        Event Name <input value={name} onChange={handleNameChange}></input>
        Location <input value={location} onChange={handleLocationChange}></input>
        Date <DatePicker placeholderText="Click to select a date" todayButton={"Today"} selected={date} onChange={setDate} />
        Start Time<DatePicker
          placeholderText="Click to select a time"
          selected={startTime}
          onChange={setStartTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="h:mm aa"
          timeCaption="Time"
        />
        End Time<DatePicker
          placeholderText="Click to select a time"
          selected={endTime}
          onChange={setEndTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="h:mm aa"
          timeCaption="Time"
        />
      </section>
      <button id='submitEvent' onClick={submitEvent}>Submit Event</button>
    </span>
  );
}

export default Admin;