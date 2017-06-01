import React from 'react';

const StudyCard = props => (
  <div className="study" onClick={props.selectStudy}>
  	<div className="details">
		<div className="title">{props.title || 'Cute Puppy'}</div>
	    <div className="session-count">{`${props.sessionCount || 0} sessions`}</div>
  	</div>
    <div className="imgwrapper">
      <img src={props.study.url} />
    </div>
  </div>
);

module.exports = StudyCard;
