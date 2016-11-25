import React from 'react';
const h337 = require('heatmap.js');

// const App = () => (<p>App</p>);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    this.startGazeListener();
  }
  // that's it... yay right? ;)

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) {
        return;
      }
      console.log('x,y', data.x, data.ym, elapsedTime);
      const xprediction = data.x;
      const yprediction = data.y;
    }).begin();
  }


  render() {
    return (<div id="heatmap" />);
  }
}

module.exports = App;
