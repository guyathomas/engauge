import React from 'react';
import { findKeyAtID } from '../../assets/scripts';

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

const SessionSidebar = (props) => {
  const { studies, selectedStudy } = props.studyList;
  const selectedStudyInd = findKeyAtID(studies, selectedStudy, 'shortCode');
  if (!props.sessionView.selected[selectedStudy]) {props.sessionView.selected[selectedStudy] = new Set();}
  if (studies[selectedStudyInd] && studies[selectedStudyInd].sessions.length > 0) {
  // If the sessions have been populated by the get request and there are sessions for the selected study
    const sessions = studies[selectedStudyInd].sessions;
    return (
      <div className="sessions-sidebar">
        {sessions.map((session, i) => {
          const duration = Math.floor(parseInt(session.duration) / 1000);
          const durationString = `${duration} ${duration === 1 ? 'second' : 'seconds'}`;
          return (<Session
            {...props}
            session={session}
            durationString={durationString}
            key={i}
            i={i}
            shortCode={studies[selectedStudyInd].shortCode}
            selected={props.sessionView.selected[selectedStudy] && props.sessionView.selected[selectedStudy].has(i)}
          />);
        })}
      </div>
    );
  } else if (studies[selectedStudyInd] === undefined || studies[selectedStudyInd].sessions.length === 0) {
    // If getCaseStudies has not yet run or there are no sessions for this study
    return <NoSessions />;
  }
};

module.exports = SessionSidebar;
