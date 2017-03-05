import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
      // counter: 0,
    };
  }

  openConnection() {
   const socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
       console.log('Client has opened the connection');
    });
    this.setState({
      socket,
    });
  }

  startGazeListener() {
    let counter = 0;
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) {
        console.log('Null data');
        return;
      }

      // if (counter % 20 === 0) {
        // console.log('x, y', data.x, data.y, `\n Seconds:${elapsedTime}`);
        this.state.socket.emit('data', {
          time: Math.floor(elapsedTime),
          x: data.x,
          y: data.y,
        });
      // }
      // counter++;
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
