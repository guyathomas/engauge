import React from 'react';
import { Link } from 'react-router';
import CaseStudyCard from './CaseStudyCard';

class ReviewCaseStudies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseStudies: [],
    };
  }

  componentDidMount() {
    this.getCaseStudies();
  }

  getCaseStudies() {
    fetch('/api/caseStudies', {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((caseStudies) => {
      console.log(caseStudies);
      this.setState({ caseStudies });
    })
    .catch((err) => {
      console.log('Error in fetching case studies', err);
    });
  }


  render() {
    return (
      <div>
        <div className="title">casestudies</div>
        <div className="casestudies">
          {this.state.caseStudies.map(caseStudy => (
            <Link to={`/review/${caseStudy.shortCode}`}>
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            </Link>
        ))}
        </div>
      </div>
    );
  }
}

module.exports = ReviewCaseStudies;
