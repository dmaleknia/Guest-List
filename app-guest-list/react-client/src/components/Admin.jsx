const React = require('react');
import { useState } from 'react';

const Admin = () => {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
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
    console.log(`name: ${name} location: ${location} date: ${date} startTime: ${startTime} endTime: ${endTime}`)
  }

  return(
    <span>
      <h2>Add an Event: </h2>
      <section id='admin'>
        Event Name <input value={name} onChange={handleNameChange}></input>
        Location <input value={location} onChange={handleLocationChange}></input>
        Date <input value={date} onChange={handleDateChange}></input>
        Start Time<input value={startTime} onChange={handleStartTimeChange}></input>
        End Time<input value={endTime} onChange={handleEndTimeChange}></input>
      </section>
      <button onClick={submitEvent}>Submit Event</button>
    </span>
  );
}

export default Admin;