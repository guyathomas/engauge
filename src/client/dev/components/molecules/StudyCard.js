import React from 'react';

import './StudyCard.styl';

const StudyCard = (props) => {
  const sessionCount = props.study.sessions.length;
  const sessionString = `${sessionCount} ${sessionCount === 1 ? 'session' : 'sessions'}`;
  return (
    <div className={`study${props.selected ? ' selected' : ''}`} onClick={props.selectStudy}>
    	<div className="details">
  		<div className="title">{props.title || 'Default Name'}</div>
  	    <div className="session-count">{sessionString}</div>
    	</div>
      <div className="imgwrapper">
        <img src={props.study.url} />
      </div>
    </div>
  )
}

module.exports = StudyCard;
