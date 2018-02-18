import React from 'react';
import Heatmap from 'components/molecules/Heatmap';
import SessionSidebar from 'components/organisms/SessionSidebar';

class SessionContiner extends React.Component {
  render() {
    return (
      <div className="sessions-container">
        <SessionSidebar />
        <Heatmap />
      </div>
    );
  }
}

export default SessionContiner;
