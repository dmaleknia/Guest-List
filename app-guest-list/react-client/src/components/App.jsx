const React = require('react');
import { useState } from 'react';

import NavBar from './NavBar.jsx';
import Admin from './Admin.jsx';
import HomePage from './HomePage.jsx';
import RSVP from './RSVP.jsx';

const App = () => {

  const [view, setView] = useState('homepage');

  const renderView = () => {
    if (view === 'admin') {
      return (
        <span>
          <NavBar setView={setView} />
          <Admin />
        </span>
      );
    } else if (view === 'rsvp') {
      return (
        <span>
          <NavBar setView={setView} />
          <RSVP />
        </span>
      );
    } else {
      return (
        <span>
          <NavBar setView={setView} />
          <HomePage />
        </span>
      );
    }
  }

  return(
    renderView()
  );
}

export default App;