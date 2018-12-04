import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

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
      console.log(events);
      return (
        <div className='events'>
          {events.map((event) => (
            <Event
              key={event.id}
              name={event.name}
              location={event.location}
              date={moment(event.date).format('L')}
              startTime={moment(event.startTime).format('LT')}
              endTime={moment(event.endTime).format('LT')}
            />
          ))}
        </div>
      );
    }
  }


  return (
    <div>
      <h1 id='eventsHeader'>Top Events</h1>
      {renderEvents()}
    </div>
  );
}

export default HomePage;