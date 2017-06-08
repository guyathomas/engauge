import React from 'react';

const Session = props => (
  <div className="session" key={props.session.id} onClick={props.toggleSession.bind(this, props.i)}>
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
  console.log('Props in SessionSidebar', props);
  console.log('studies, selectedStudy', studies, selectedStudy);

  if (studies[selectedStudy]) {
    const sessions = studies[selectedStudy].sessions;
    return (
      <div className="sessions-sidebar">
        {sessions && sessions.map((session, i) => {
          const duration = Math.floor(parseInt(session.duration) / 1000);
          const durationString = `${duration} ${duration === 1 ? 'second' : 'seconds'}`;
          return <Session {...props} session={session} durationString={durationString} key={i} i={i} />;
        })}
      </div>
    );
  }
  return <NoSessions />;
};

module.exports = SessionSidebar;
