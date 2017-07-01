import React from 'react';
import Summary from './Summary';
import Heatmaps from './Heatmaps';
import Recordings from './Recordings';
import WatchDetails from './WatchDetails';
import StudyOptions from './StudyOptions';

import './SessionView.styl';

// TODO: These are coupled. Change it so that they no longer have to be maintained together
const views = [
  <Summary />,
  <Heatmaps />,
  <Recordings />,
  <WatchDetails />,
  <StudyOptions />,
];
const titles = ['Summary', 'Heatmaps', 'Recordings', 'WatchDetails', 'StudyOptions'];


const Title = props => (
  <li className={props.isActive ? 'active' : ''} onClick={props.updateActiveTab} >{props.title}</li>
);

const SessionView = props => (
  <div className="sessions-container">
    <ul className="titles">
      {titles.map((title, i) => (
        <Title
          title={title}
          i={i}
          key={i}
          isActive={props.sessionView.activeTab === i}
          updateActiveTab={props.updateActiveTab.bind(this, i)}
        />
    ))}
    </ul>
    {React.cloneElement(views[props.sessionView.activeTab], { ...props })}
  </div>
  );

export default SessionView;
