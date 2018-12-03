const React = require('react');

const Event = (props) => {

  return (
    <div>
      <div className='event'>
        <span className='name'>
          {props.name}
        </span>
        <span className='location'>
          {props.location}
        </span>
        <span className='date'>
          {props.date}
        </span>
        <span className='startTime'>
          {props.startTime}
        </span>
        <span className='endTime'>
          {props.endTime}
        </span>
      </div>
    </div>
  );

}

export default Event;