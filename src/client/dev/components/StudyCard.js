import React from 'react';

const CaseStudyCard = props => (
  <div className="study" >
    <div className="imgwrapper">
      <img src={props.study.url} />
    </div>
  </div>
);

module.exports = StudyCard;
