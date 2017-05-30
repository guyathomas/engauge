import React from 'react';
import ClickGame from './ClickGame';
import queries from '../queries';
class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
      study: {},
      training: true,
      recStartMs: 0,
    };
  }

  openSocket() {
    console.log('A connection will bne opened with', window.location.origin);
    const socket = io.connect(window.location.origin, { secure: true, port: 433 });
    socket.on('connect', () => {
      console.log('Client has opened the connection');
    });
    this.setState({ socket });
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      // Don't send the data if there is no coordinates or is currently in training
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
    fetch('/graphql', {
      ...queries.headers,
      ...queries.getStudy(shortCode),
    })
    .then(response => response.json())
    .then(({ data }) => {
      console.log('data', data);
      this.setState({ study: data.study });
    });
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
          <img src={this.state.study.url} />
        </div>
      );
    }
  }
  }

module.exports = Watch;
