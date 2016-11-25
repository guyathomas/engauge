import React from 'react';

// const App = () => (<p>App</p>);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    console.log('webgazer', webgazer);
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) {
        return;
      }
      const xprediction = data.x; // these x coordinates are relative to the viewport
      const yprediction = data.y; // these y coordinates are relative to the viewport
      const newLocations = this.state.locations.push([xprediction, yprediction]);

      this.setState({ locations: newLocations });
      console.log(elapsedTime, this.state.locations);
    }).begin();
  }

  render() {
    return (<div>In the app</div>);
  }
}

module.exports = App;
