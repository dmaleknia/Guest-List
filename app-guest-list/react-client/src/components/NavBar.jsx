const React = require('react');

const NavBar = (props) => {
  console.log(props);

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
          Admin
        </span>
      </div>
    </div>
  );

}

export default NavBar;