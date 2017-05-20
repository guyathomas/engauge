import React from 'react';
import ClickGame from './ClickGame';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
      sessions: {},
      training: true,
      recStartMs: 0,
    };
  }

  openSocket() {
    const socket = io.connect('https://localhost', { secure: true });
    socket.on('connect', () => {
      console.log('Client has opened the connection');
    });
    this.setState({ socket });
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      //Don't send the data if there is no coordinates or is currently in training
      if (data == null || this.state.training) { return; }

      if (!this.state.recStartMs) {
        this.setState({ recStartMs: elapsedTime });
      } else {
        this.state.socket.emit('data', {
          time: Math.floor(elapsedTime - this.state.recStartMs),
          x: data.x,
          y: data.y,
        });
      }
    }).begin();
  }

  getSessions(shortCode) {
    fetch(`/api/caseStudies/${shortCode}`, {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then(sessions => this.setState({ sessions }));
  }

  componentDidMount() {
    const shortCode = this.props.routeParams.shortCode;
    this.openSocket();
    this.getSessions(shortCode);
    this.startGazeListener();
  }

  componentWillUnmount() {
    // TODO: Stop the webcam light being on
    this.state.socket.disconnect();
  }

  completeTraining() {
    this.setState({ training: false });
  }

  render() {
    if (this.state.training) {
      return (<ClickGame completeTraining={this.completeTraining.bind(this)} />);
    } else {
      return (
        <div className="watch">
            <img src={this.state.sessions.url} />
        </div>
      );
    }
  }
  }

module.exports = Watch;
