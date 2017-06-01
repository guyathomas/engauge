import React from 'react';
import { Link } from 'react-router';
import queries from '../queries';

const EmptyReview = () => (
  <div className="instructions" >
  Please select a session to review
  </div>
);

class SessionSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      // shortCode: this.props.params.shortCode,
      activeSession: 0,
      studyURL: '',
    };
  }

  componentDidMount() {
    const shortCode = this.state.shortCode;
    this.getSessionData(shortCode);
  }

  getSessionData(shortCode) {

    // fetch('/graphql', {
    //   ...queries.headers,
    //   ...queries.getSessions('143a2'),
    // })
    // .then(response => response.json())
    // .then(({ data }) => {
    //   console.log('data from getSessionData', data);
    //   this.setState({
    //     sessions: data.study.sessions,
    //     studyURL: data.study.url,
    //   });
    // });
  }

  updateSession(i) {
    this.setState({ activeSession: i });
  }

  render() {
    console.log('this.props in sessionsidebar', this.props)
    const { studies, selectedStudy } = this.props.studyList;
    const sessions = studies[selectedStudy] && studies[selectedStudy].sessions
    return (
      <div className="sessions-sidebar">
        {sessions && sessions.map((session, i) => {
          const duration = Math.floor(parseInt(session.duration) / 1000);
          const durationString = `${duration} ${duration === 1 ? 'second' : 'seconds'}`
          return (
            <div className="session" key={session.id} onClick={this.props.toggleSession.bind(this, i)}>
                <div className="user">{session.user || 'Anonymous'}</div>
                <div className="details">
                  <div className="date">{(session.createdAt && session.createdAt.split(' ').slice(1, 3).join(' ')) || 'recently'}</div>
                  <div className="duration">{durationString}</div>
                </div>
            </div>
          )
        }
        )}
      </div>
    );
  }
}

module.exports = SessionSidebar;

// render() {
//   const sessions = this.state.sessions;
//   const url = this.props.location.pathname;

//   return (
//     <div className="sessions-view">
//       <div className="sessions-sidebar">
//         <div className="info">
//           <div className="title">Sessions</div>
//           <div className="location">{window.location.host + url}</div>
//         </div>
//         {sessions.map((item, i) => (
//           <div className="session" key={item.id} onClick={this.updateSession.bind(this, i)}>
//             <Link to={`/review/${this.props.params.shortCode}/${item.id}`}>
//               {item.id}
//             </Link>
//           </div>
//         ))}
//       </div>
//       {/*TODO: Have the active session come from the URL rather than props*/}
//       {this.props.children && React.cloneElement(this.props.children, {
//               activeSession: this.state.sessions[this.state.activeSession],
//               studyURL: this.state.studyURL,
//         })
//       }
//       {!this.props.children && <EmptyReview />}
//     </div>
//   );
// }
