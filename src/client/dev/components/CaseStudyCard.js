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
      <div className="case-study" xs={1} sm={2} md={4} lg={5} }>
        <div>{this.props.caseStudy.url}</div>
        <div className="imgwrapper">
          <img src={this.props.caseStudy.url} />
        </div>
        <div>{this.props.caseStudy.createdAt}</div>
      </div>
    );
  }
}

module.exports = CaseStudyCard;
