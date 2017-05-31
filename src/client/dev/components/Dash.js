import React from 'react';
import Stats from './Stats';
import StudyList from './StudyList';
import SessionView from './SessionView';

// const urlToComponentMappings = {
//   summary: 'Summary',
//   heatmaps: 'HeatMaps',
//   recordings: 'Recordings',
//   watchdetails: 'WatchDetails',
//   studyoptions: 'StudyOptions',
// };


const Dash = props => (
  <div>
	The Dash
	<Stats />
    <StudyList />
    <SessionView {...props} />
  </div>
)


export default Dash;
