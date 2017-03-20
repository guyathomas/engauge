import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
      sessions: {},
    };
  }

  openSocket() {
   const socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
       console.log('Client has opened the connection');
    });
    this.setState({
      socket,
    });
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      if (data == null) { return; }

      this.state.socket.emit('data', {
        time: Math.floor(elapsedTime),
        x: data.x,
        y: data.y,
      });
    }).begin();
  }

  getSessions(shortCode) {
    fetch(`/api/caseStudies/${shortCode}`, {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((sessions) => {
      console.log('sessions after getSessions', sessions)
      this.setState({ sessions });
    })
    .then(() => {
      //Testing promise
      console.log(this.state);
    });
  }

  componentDidMount() {
    const shortCode = this.props.routeParams.shortCode;
    this.openSocket();
    this.getSessions(shortCode);
    this.startGazeListener();
  }

  componentWillUnmount() {
    //TODO: Stop the webcam light being on
    this.state.socket.disconnect();
  }


  render() {
    return (
      <div className="watch">
        <div className="container">
          <img src={this.state.sessions.url} /> 
        </div>
      </div>
    );
    }
  }

module.exports = Watch;
