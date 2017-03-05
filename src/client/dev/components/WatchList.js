import React from 'react';
import CaseStudyCard from './CaseStudyCard';

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
    console.log('get caseStudys run');
    fetch('/api/caseStudys')
    .then(results => (results.json()))
    .then((caseStudys) => {
      console.log('caseStudys', caseStudys);
      this.setState({ caseStudys });
    });
  }

  render() {
    return (
      <div>
        <div>WatchList</div>
        <div className="case-studys-container" >
          {this.state.caseStudys.map((caseStudy) => {
            return (<CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />);
          })}
        </div>
      </div>
    );
  }
}

module.exports = WatchList;
