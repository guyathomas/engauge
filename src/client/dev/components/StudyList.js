import React from 'react';
import queries from '../queries';

import StudyCard from './StudyCard';
import Filters from './Filters';

class StudyList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getStudies();
  }

  getStudies() {
    fetch('/graphql', {
      ...queries.headers,
      ...queries.getStudies,
    })
    .then(response => response.json())
    .then(({ data, errors }) => {
      if (errors) { throw new Error('Error in response from graphql server'); }
      this.props.updateStudies(data.studies);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="studies-container">
        <Filters studyCount={this.props.studyList.studies.length} />
        {this.props.studyList.studies.map((study, i) => (
          <StudyCard
            key={study.id}
            study={study}
            selectStudy={this.props.selectStudy.bind(this, i)
          }
          />
        ))}
      </div>
    );
  }
}

module.exports = StudyList;
