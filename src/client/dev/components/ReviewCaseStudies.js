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


  getCaseStudies() {
    fetch('/api/casestudys', {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((caseStudies) => {
      console.log(caseStudies);
      this.setState({ caseStudies: caseStudies });
    });
  }

  componentDidMount() {
    this.getCaseStudies();
  }

  render() {
    return (
      <div>
        <div className="title">casestudies</div>
        <div className="casestudies">
        {this.state.caseStudies.map((caseStudy) => (
            <Link to={'/review/' + caseStudy.shortCode}>
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy}>
          </CaseStudyCard>
            </Link>
        ))}
        </div>
      </div>
    );
  }
}

module.exports = ReviewCaseStudies;
