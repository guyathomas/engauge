import React from 'react';

class CaseStudyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: '',
    };
  }

  render() {
    return (
      <div className="case-studys">
        <div>{this.props.caseStudy.url}</div>
        <div>{this.props.caseStudy.createdAt}</div>
      </div>
    );
  }
}

module.exports = CaseStudyCard;
