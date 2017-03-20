import React from 'react';
import { Link } from 'react-router';

class ReviewSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      shortCode: this.props.params.shortCode,
      activeSession: 0,
      caseStudy: {},
    };
  }

  getSessions(shortCode) {
    fetch(`/api/sessions/${shortCode}`)
    .then(response => response.json())
    .then((sessions) => {
      this.setState({ sessions: sessions.data });
    });
  }

  getCaseStudy(shortCode) {
    //TODO: MOdularise. This was copied from watch
    fetch(`/api/caseStudies/${shortCode}`, {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((caseStudy) => {
      console.log('sessions after getSessions', caseStudy);
      this.setState({ caseStudy });
    });
  }

  updateSession(i) {
    this.setState({ activeSession: i });
  }

  componentDidMount() {
    const shortCode = this.state.shortCode;
    this.getCaseStudy(shortCode);
    this.getSessions(shortCode);
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
              caseStudyURL: this.state.caseStudy.url,
            })}
      </div>
    );
  }
}

module.exports = ReviewSidebar;
