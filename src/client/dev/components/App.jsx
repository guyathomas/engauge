import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    this.startGazeListener();
    this.createHeatmap()
  }

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmapContainer'),
      maxOpacity: 0.6,
      radius: 50,
      blur: 0.90,
      backgroundColor: 'rgba(0, 0, 58, 0.96)',
    });
    const heatmapContainer = document.getElementById('heatmapContainerWrapper');
    
    
    heatmapContainer.onmousemove = heatmapContainer.ontouchmove = (e) => {
      e.preventDefault();
      let x = e.layerX;
      let y = e.layerY;
      if (e.touches) {
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
      }

      heatmap.addData({ x, y, value: 1 });
    };
    heatmapContainer.onclick = (e) => {
      const x = e.layerX;
      const y = e.layerY;
      heatmap.addData({ x, y, value: 1 });
    };
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) {
        return;
      }
      console.log('x,y', data.x, data.y, elapsedTime);
      const xprediction = data.x;
      const yprediction = data.y;
    }).begin();
  }


  render() {
    return (
      <div id="heatmapContainerWrapper">
        <div id="heatmapContainer" />
      </div>
    );
  }
}

module.exports = App;
