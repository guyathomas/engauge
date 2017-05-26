import React from 'react';

const StudyCard = props => (
  <div className="study" >
    <div className="imgwrapper">
      <img src={props.study.url} />
    </div>
  </div>
);

module.exports = StudyCard;
