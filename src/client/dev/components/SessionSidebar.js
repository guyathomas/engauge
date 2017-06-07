import React from 'react';

const SessionSidebar = (props) => {
  const { studies, selectedStudy } = props.studyList;
  const sessions = studies[selectedStudy] && studies[selectedStudy].sessions;
  return (
      <div className="sessions-sidebar">
        {sessions && sessions.map((session, i) => {
          const duration = Math.floor(parseInt(session.duration) / 1000);
          const durationString = `${duration} ${duration === 1 ? 'second' : 'seconds'}`;
          return (
            <div className="session" key={session.id} onClick={props.toggleSession.bind(this, i)}>
              <div className="user">{session.user || 'Anonymous'}</div>
              <div className="details">
                  <div className="date">{(session.createdAt && session.createdAt.split(' ').slice(1, 3).join(' ')) || 'recently'}</div>
                  <div className="duration">{durationString}</div>
                </div>
            </div>
          );
        })}
      </div>
  )
}

module.exports = SessionSidebar;
