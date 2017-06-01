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
      this.setState({ studies: data.studies });
    });
  }

  render() {
    const action = this.props.action;
    return (
      <div className="studies-container">
        <Filters />
        {this.state.studies.map((study, i) => (
          <Link to={`/dash/${study.shortCode}`} key={i} >
            <StudyCard key={study.id} study={study} />
          </Link>
        ))}
      </div>
    );
  }
}

module.exports = StudyList;
