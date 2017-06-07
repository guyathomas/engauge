import React from 'react';

const StudyCard = (props) => {
  const sessionCount = props.study.sessions.length;
  const sessionString = `${sessionCount} ${sessionCount === 1 ? 'session' : 'sessions'}`;
  return (
    <div className="study" onClick={props.selectStudy}>
    	<div className="details">
  		<div className="title">{props.title || 'Cute Puppy'}</div>
  	    <div className="session-count">{sessionString}</div>
    	</div>
      <div className="imgwrapper">
        <img src={props.study.url} />
      </div>
    </div>
  )
}

module.exports = StudyCard;
