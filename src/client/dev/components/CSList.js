import React from 'react';
import { Link } from 'react-router';
import StudyCard from './StudyCard';
import queries from '../queries';

class CSList extends React.Component {
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
    const title = (action === 'review' ? 'Review Case Studies' : 'Record Session');
    return (
      <div className="studies-container">
        <div className="title">{title}</div>
        <div className="studies">
          {this.state.studies.map(study => (
            <Link to={`/${action}/${study.shortCode}`}>
              <StudyCard key={study.id} study={study} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

module.exports = CSList;
