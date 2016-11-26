import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) {
        return;
      }

      const count = this.state.counter;
      this.setState({ counter: (count + 1) });

      if (count % 20 === 0) {
        this.addHeat(data.x, data.y);
        console.log('Count: ', this.state.counter, 'x, y', data.x, data.y, `\n Seconds:${elapsedTime}`);
      }
    }).begin();
  }

  render() {
    console.log(this.props);
    return (
      <div>Watch</div>
    );
  }
  }

module.exports = Watch;
