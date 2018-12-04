const React = require('react');
import { useState, useEffect } from 'react';
import axios from 'axios';

import Event from './Event.jsx';

const HomePage = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const renderEvents = () => {
    if (events.length === 0) {
      return (
        <div className='events'></div>
      );
    } else {
      return (
        <div className='events'>
          {events.map((event, index) => (
            <Event
              key={index}
              name={event.name}
              location={event.location}
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
            />
          ))}
        </div>
      );
    }
  }


  return (
    <div>
      {renderEvents()}
    </div>
  );
}

export default HomePage;