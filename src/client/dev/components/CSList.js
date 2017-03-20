import React from 'react';
import { Link } from 'react-router';
import CaseStudyCard from './CaseStudyCard';

class CSList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseStudies: [],
    };
  }

  componentWillMount() {
    this.getCaseStudys();
  }

  getCaseStudys() {
    fetch('/api/caseStudies')
    .then(results => (results.json()))
    .then(caseStudies => (this.setState({ caseStudies })))
    .catch((err) => {
      console.log('Error in fetching case studies', err);
    });
  }

  render() {
    const action = this.props.action;
    const title = (action === 'review' ? 'Review Case Studies' : 'Record Session');
    return (
      <div className="cs-container">
        <div className="title">{title}</div>
        <div className="casestudies">
          {this.state.caseStudies.map(caseStudy => (
            <Link to={`/${action}/${caseStudy.shortCode}`}>
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

module.exports = CSList;
