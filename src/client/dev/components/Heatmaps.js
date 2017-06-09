import React from 'react';
import Heatmap from './Heatmap';
import SessionSidebar from './SessionSidebar';

const Heatmaps = (props) => (
  <div className="heatmaps-container">
  	<SessionSidebar {...props} />
  	{/*<Heatmap {...props} />*/}
  </div>
);

module.exports = Heatmaps;
