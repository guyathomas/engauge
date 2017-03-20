import React from 'react';
import { Link } from 'react-router';
import CaseStudyCard from './CaseStudyCard';

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseStudies: [],
    };
  }

  componentWillMount() {
    console.log('componentDidMount');
    this.getCaseStudys();
  }

  getCaseStudys() {
    fetch('/api/caseStudies')
    .then(results => (results.json()))
    .then((caseStudies) => {
      this.setState({ caseStudies });
    })
    .catch((err) => {
      console.log('The error was', err);
    });
  }

  render() {
    return (
      <div>
        <div className="title">casestudies</div>
        <div className="casestudies">
          {this.state.caseStudies.map(caseStudy => (
            <Link to={`/watch/${caseStudy.shortCode}`}>
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            </Link>
        ))}
        </div>
      </div>
    );
  }
}

module.exports = WatchList;
