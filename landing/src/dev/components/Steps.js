import React from 'react';

const Step = props => (
  <div className="step">
    <div className={ `fa fa-5x ${ props.icon }` } />
    <h3>{ props.title }</h3>
    <div>{ props.description }</div>
  </div>
);

const Steps = () => (
  <div className="step-container">
    <h2>Give your designers superpowers</h2>
    <h3>Create case studies to share with your customers learn what they pay attention to</h3>
    <div className="steps">
      <Step
        title="Create"
        description="Create unique link that your customers can use to participate in your case study"
        icon="fa fa-cogs"
      />
      <Step
        title="Review"
        description="See heatmaps of where their eyes were focused during the case study."
        icon="fa fa-tachometer"
      />
    </div>
  </div>
);

module.exports = Steps;
