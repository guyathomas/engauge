import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { Link } from 'react-router';


class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseStudys: [],
    };
  }

  componentWillMount() {
    console.log('componentDidMount');
    this.getCaseStudys();
  }

  getCaseStudys() {
    fetch('/api/casestudys')
    .then(results => (results.json()))
    .then((caseStudys) => {
      console.log('caseStudys', caseStudys);
      this.setState({ caseStudys });
    })
    .catch((err) => {
      console.log('The error was', err);
    });
  }

  render() {
    return (
      <div>
        <div>WatchList</div>
        <div className="case-studys-container" >
          {this.state.caseStudys.map(caseStudy => (
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
