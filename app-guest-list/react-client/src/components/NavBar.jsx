const React = require('react');

const NavBar = (props) => {

  const setView = props.setView;

  return (
    <div>
      <div className='nav'>
        <span className={'homepage'}
          onClick={() => setView('homepage')}>
          Homepage
        </span>
        <span className={'rsvp'}
          onClick={() => setView('rsvp')}>
          RSVP
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