import React from 'react';
import Heatmap from './Heatmap';
import SessionSidebar from './SessionSidebar';

const Heatmaps = () => (
  <div className="heatmaps-container">
  	<SessionSidebar />
  	<Heatmap />
  </div>
);

module.exports = Heatmaps;
