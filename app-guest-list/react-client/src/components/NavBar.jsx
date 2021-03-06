import React from 'react';

const NavBar = (props) => {

  const setView = props.setView;

  return (
    <div>
      <div className='nav'>
        <span className={'homepage'}
          onClick={() => setView('homepage')}>
          Home
        </span>
        <span className={'admin'}
          onClick={() => setView('admin')}>
          Add Event
        </span>
      </div>
    </div>
  );

}

export default NavBar;