import React from 'react';
import { Link } from 'react-router';
import queries from '../queries';

const EmptyReview = () => (
  <div className="instructions" >
  Please select a session to review
  </div>
);

class ReviewSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      shortCode: this.props.params.shortCode,
      activeSession: 0,
      studyURL: '',
    };
  }

  componentDidMount() {
    const shortCode = this.state.shortCode;
    this.getSessionData(shortCode);
  }

  getSessionData(shortCode) {
    fetch('/graphql', {
      ...queries.headers,
      ...queries.getSessions(shortCode),
    })
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({
        sessions: data.study.session,
        studyURL: data.study.url,
      });
    });
  }

  updateSession(i) {
    this.setState({ activeSession: i });
  }

  render() {
    const sessions = this.state.sessions;
    const url = this.props.location.pathname;

    return (
      <div className="sessions-view">
        <div className="sessions-sidebar">
          <div className="info">
            <div className="title">Sessions</div>
            <div className="location">{window.location.host + url}</div>
          </div>
          {sessions.map((item, i) => (
            <div className="session" key={item.id} onClick={this.updateSession.bind(this, i)}>
              <Link to={`/review/${this.props.params.shortCode}/${item.id}`}>
                {item.id}
              </Link>
            </div>
          ))}
        </div>
        {/*TODO: Have the active session come from the URL rather than props*/}
        {this.props.children && React.cloneElement(this.props.children, {
                activeSession: this.state.sessions[this.state.activeSession],
                studyURL: this.state.studyURL,
          })
        }
        {!this.props.children && <EmptyReview />}
      </div>
    );
  }
}

module.exports = ReviewSidebar;
