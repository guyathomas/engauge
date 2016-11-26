import React from 'react';

class Heatmap extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.heatmap = this.createHeatmap();
  }

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmapContainer'),
      radius: 50,
    });

    return heatmap;
  }

  addHeat(x, y) {
    const newPoint = { x, y, value: 1 };
    this.heatmap.addData(newPoint);
  }

  render() {
    return (
      <div id="heatmapContainerWrapper">
        <div id="heatmapContainer" />
      </div>
    );
  }
}

module.exports = Heatmap;
