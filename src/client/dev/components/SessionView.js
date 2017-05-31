import React from 'react';
import Summary from './Summary';
import HeatMaps from './Heatmaps';
import Recordings from './Recordings';
import WatchDetails from './WatchDetails';
import StudyOptions from './StudyOptions';

const Views = {
  summary: <Summary />,
  heatmaps: <HeatMaps />,
  recordings: <Recordings />,
  watchdetails: <WatchDetails />,
  studyoptions: <StudyOptions />,

};

const SessionView = props => (
  <div className="sessions-container">
    <ul className="views">
      <li className="active">Summary</li>
      <li>Heatmaps</li>
      <li>Recordings</li>
      <li>Watch</li>
      <li>Study Options</li>
    </ul>
    {console.log(Views.summary)}
    {Views[props.routeParams.sessionView] || Views.summary}
  </div>
	);

export default SessionView;
