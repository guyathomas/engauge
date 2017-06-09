import React from 'react';
import { findKeyAtID, isSetEqual } from '../../assets/scripts';

const Session = props => (
  <div className={`session${props.selected ? ' selected' : ''}`} key={props.session.id} onClick={props.toggleSession.bind(this, props.i, props.shortCode)}>
    <div className="user">{props.session.user || 'Anonymous'}</div>
    <div className="details">
      <div className="date">{(props.session.createdAt && props.session.createdAt.split(' ').slice(1, 3).join(' ')) || 'recently'}</div>
      <div className="duration">{props.durationString}</div>
    </div>
  </div>
);

const NoSessions = props => (
  <div>There are no sessions for this study</div>
);

class SessionSidebar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    // this.props.toggleSession(0, this.props.studyList.selectedStudy);
  }

  

  render() {
    const { studies, selectedStudy } = this.props.studyList;
    const selectedStudyInd = findKeyAtID(studies, selectedStudy, 'shortCode');
    if (!this.props.sessionView.selected[selectedStudy]) {
        this.props.sessionView.selected[selectedStudy] = new Set();
        //TODO: This causes error "Warning: setState(...): " need to call this function outside the render method
        this.props.toggleSession(0, this.props.studyList.selectedStudy);
    }
    if (studies[selectedStudyInd] && studies[selectedStudyInd].sessions.length > 0) {
    // If the sessions have been populated by the get request and there are sessions for the selected study
      const sessions = studies[selectedStudyInd].sessions;
      return (
        <div className="sessions-sidebar">
          {sessions.map((session, i) => {
            // console.log('Will be toggled', this.props.sessionView.selected[selectedStudy] && this.props.sessionView.selected[selectedStudy].has(i))
            const duration = Math.floor(parseInt(session.duration) / 1000);
            const durationString = `${duration} ${duration === 1 ? 'second' : 'seconds'}`;
            return (<Session
              {...this.props}
              session={session}
              durationString={durationString}
              key={i}
              i={i}
              shortCode={studies[selectedStudyInd].shortCode}
              selected={this.props.sessionView.selected[selectedStudy] && this.props.sessionView.selected[selectedStudy].has(i)}
            />);
          })}
        </div>
      );
    } else if (studies[selectedStudyInd] === undefined || studies[selectedStudyInd].sessions.length === 0) {
      // If getCaseStudies has not yet run or there are no sessions for this study
      return <NoSessions />;
    }
  }
}

module.exports = SessionSidebar;
