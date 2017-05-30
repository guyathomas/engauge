import React from 'react';
import { Link } from 'react-router';
import StudyCard from './StudyCard';

class CSList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studies: [],
    };
  }

  componentWillMount() {
    this.getCaseStudys();
  }

  getCaseStudys() {
    fetch('/graphql', {
      method: 'post',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        query: '{studies {id,url,shortCode,}}',
      }),
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
