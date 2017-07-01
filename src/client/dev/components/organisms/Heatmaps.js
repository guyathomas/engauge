import React from 'react';
import Heatmap from '../molecules/Heatmap';
import SessionSidebar from '../molecules/SessionSidebar';

const Heatmaps = (props) => (
  <div className="heatmaps-container">
  	<SessionSidebar {...props} />
  	<Heatmap {...props} />
  </div>
);

module.exports = Heatmaps;
