import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import RSVP from './RSVP.jsx';
import Event from './Event.jsx';

const HomePage = () => {

  const [events, setEvents] = useState([]);
  const [view, setView] = useState('feed');
  const [focalEvent, setFocalEvent] = useState();

  useEffect(() => {
    axios.get('/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const handleEventClick = (id, name) => {
    setFocalEvent([ id, name ]);
    setView('rsvp');
  }

  const renderEvents = () => {
    if (events.length === 0) {
      return (
        <div className='events'></div>
      );
    } else if (view === 'rsvp') {
      return (
        <div id='rsvp'>
          <RSVP id={focalEvent[0]} eventName={focalEvent[1]} />
        </div>
      );
    }
    else {
      return (
        <div className='events'>
          <h1 id='eventsHeader'>Top Events</h1>
          {events.map((event) => (
            <a key={event.id} onClick={() => { handleEventClick(event.id, event.name) }}>
              <Event
                name={event.name}
                location={event.location}
                date={moment(event.date).format('L')}
                startTime={moment(event.startTime).format('LT')}
                endTime={moment(event.endTime).format('LT')}
              />
            </a>
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