import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // counter: 0,
    };
  }

  openConnection() {
   var socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
       console.log('Client has opened the connection');
    });
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) {
        console.log('Null data');
        return;
      }

      if (Math.floor(elapsedTime) % 5 < 0.01) {
        console.log('x, y', data.x, data.y, `\n Seconds:${elapsedTime}`);
      }
    }).begin();
  }

  componentDidMount() {
    this.openConnection();
    this.startGazeListener();
  }


  render() {
    console.log('props are', this.props);
    return (
      <div>Watch</div>
    );
    }
  }

module.exports = Watch;
