import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.startGazeListener();
    this.heatmap = this.createHeatmap();
  }

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmapContainer'),
      // maxOpacity: 0.6,
      radius: 50,
      // blur: 0.90,
      // backgroundColor: 'rgba(0, 0, 58, 0.96)',
    });

    return heatmap;
  }

  addHeat(x, y) {
    const heatmapContainer = document.getElementById('heatmapContainerWrapper');
    const newPoint = { x, y, value: 1 };
    this.heatmap.addData(newPoint);
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) {
        return;
      }

      const count = this.state.counter;
      this.setState({counter: (count + 1)});

      if (count % 100 === 0) {
        this.addHeat(data.x, data.y);
        console.log(this.state.counter);
        console.log('x,y', data.x, data.y, elapsedTime);
      }
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
