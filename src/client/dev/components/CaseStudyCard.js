import React from 'react';

const CaseStudyCard = props => (
  <div className="case-study" >
    <div>{props.caseStudy.url}</div>
    <div className="imgwrapper">
      <img src={props.caseStudy.url} />
    </div>
    <div>{props.caseStudy.createdAt}</div>
  </div>
);

module.exports = CaseStudyCard;
