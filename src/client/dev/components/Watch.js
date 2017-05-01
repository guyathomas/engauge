import React from 'react';
import ClickGame from './ClickGame';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
      sessions: {},
      targetGames: 5,
      training: {
        active: true,
        currentGame: 0,
      },
      recStartMs: 0,
    };
  }

  openSocket() {
    const socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
      console.log('Client has opened the connection');
    });
    this.setState({ socket });
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      //Don't send the data if there is no coordinates or is currently in training
      if (data == null || this.state.training.active) { return; }

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

  nextGame() {
    if (this.state.training.currentGame >= this.state.targetGames ) {
      this.setState({
        training: {
          active: false,
          currentGame: 1,
        },
      });
    } else {
      const nextGameNum = this.state.training.currentGame + 1;
      this.setState({
        training: {
          active: true,
          currentGame: nextGameNum,
        },
      });
    }
  }

  render() {
    if (this.state.training.active) {
      return (<ClickGame nextGame={this.nextGame.bind(this)} />)
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
