import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
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

      this.state.socket.emit('data', {
        time: Math.floor(elapsedTime),
        x: data.x,
        y: data.y,
      });
    }).begin();
  }

  componentDidMount() {
    this.openConnection();
    this.startGazeListener();
  }

  componentWillUnmount() {
    //TODO: Stop the webcam light being on
    this.state.socket.disconnect();
  }


  render() {
    console.log('props are', this.props);
    return (
      <div>Watch</div>
    );
    }
  }

module.exports = Watch;
