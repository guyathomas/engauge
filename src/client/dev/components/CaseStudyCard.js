import React from 'react';

const CaseStudyCard = props => (
  <div className="case-study" >
    <div className="imgwrapper">
      <img src={props.caseStudy.url} />
    </div>
  </div>
);

module.exports = CaseStudyCard;
