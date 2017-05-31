import React from 'react';

const StudyCard = props => (
  <div className="study" >
  	<div className="details">
		<div className="title">Cute Puppy Left</div>
	    <div className="url">http://cdn2-www.dogtime.com</div>
	    <div className="session-count">24 Sessions</div>
  	</div>
    <div className="imgwrapper">
      <img src={props.study.url} />
    </div>
  </div>
);

module.exports = StudyCard;
