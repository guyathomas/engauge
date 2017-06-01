import React from 'react';
import Summary from './Summary';
import Heatmaps from './Heatmaps';
import Recordings from './Recordings';
import WatchDetails from './WatchDetails';
import StudyOptions from './StudyOptions';

//TODO: These are coupled. Change it so that they no longer have to be maintained together
const views = [
  <Summary />,
  <Heatmaps />,
  <Recordings />,
  <WatchDetails />,
  <StudyOptions />,
];
const titles = ['Summary', 'Heatmaps', 'Recordings', 'WatchDetails', 'StudyOptions'];


const Title = (props) => (
  <li className={props.active === props.i ? 'active' : ''}>{props.title}</li>
);

const SessionView = (props) => {
	console.log('props in sessionview', props)
  return (
	  <div className="sessions-container">
	    <ul className="titles">
	      {titles.map((title, i) => <Title title={title} i={i} key={i} active={1} />)}
	    </ul>
	    {views[1]}
	  </div>
  )
}

export default SessionView;
