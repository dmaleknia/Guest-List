const React = require('react');
import { useState, useEffect } from 'react';

import NavBar from './NavBar.jsx';

const App = (props) => {

  const [view, setView] = useState('homepage');

  useEffect(() => {
    // this function is called after render
    console.log('useEffect called!');
  });


  const renderView = () => {
    if (view === 'admin') {
      return (
        <span>
          <NavBar setView={setView} />
          <span>admin</span>
        </span>
      );
    } else if (view === 'rsvp') {
      return (
        <span>
          <NavBar setView={setView} />
          <span>rsvp</span>
        </span>
      );
    } else {
      return (
        <span>
          <NavBar setView={setView} />
          <span>homepage</span>
        </span>
      );
    }
  }

  return(
    renderView()
  );
}

export default App;