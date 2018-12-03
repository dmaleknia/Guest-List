const React = require('react');
import { useState, useEffect } from 'react';
import axios from 'axios';

import Event from './Event.jsx';

const HomePage = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log('useEffect called from HomePage!');
    axios.get('/events')
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
        console.log(events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderEvents = () => {
    console.log(`Number of events: ${events.length}`);
    console.log(`events: ${JSON.stringify(events)}`);
    if (events.length === 0) {
      return (
        <div></div>
      );
    } else {
      return (
        <div>
          {events.map((event, index) => {
            <Event
              id={index}
              name={event.name}
              location={event.location}
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
            />
          })}
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