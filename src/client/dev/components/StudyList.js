import React from 'react';
import { Link } from 'react-router';
import StudyCard from './StudyCard';
import queries from '../queries';
import Filters from './Filters';

class StudyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studies: [],
    };
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
    .then(({ data }) => {
      console.log('Got these studies back', data.studies)
      this.props.updateStudies(data.studies)
    });
  }

  render() {
    return (
      <div className="studies-container">
        <Filters studyCount={this.props.studyList.studies.length} />
        {this.props.studyList.studies.map((study, i) => (
          <StudyCard key={study.id} study={study} selectStudy={this.props.selectStudy.bind(this, i) }/>
        ))}
      </div>
    );
  }
}

module.exports = StudyList;
