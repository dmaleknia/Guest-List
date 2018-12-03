const React = require('react');
import { useState, useEffect } from 'react';

const App = (props) => {

  const [view, setView] = useState();

  useEffect(() => {
    // this function is called after render
    console.log('useEffect called!');
  });

  const renderView = () => {
    if (view === "menu") {
      return (
        <span>menu</span>
      );
    } else {
      return (
        <span>homepage</span>
      );
    }
  }

  return(
    renderView()
  );
}

export default App;