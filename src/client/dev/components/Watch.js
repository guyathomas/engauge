import React from 'react';
import ClickGame from './ClickGame';
import queries from '../queries';
class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      study: {},
      session: [],
      isTraining: true,
    };
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      // Don't send the data if there is no coordinates or is currently in training
      if (data == null || this.state.isTraining) { return; }

      if (!this.state.recStartMs) {
        this.setState({ recStartMs: elapsedTime });
      } else {
        this.setState({
          session: [...this.state.session, {
            time: Math.floor(elapsedTime - this.state.recStartMs),
            x: data.x,
            y: data.y,
          }],
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
      this.setState({ study: data.study });
    });
  }

  componentDidMount() {
    const shortCode = this.props.params.shortCode;
    this.getSessions(shortCode);
    this.startGazeListener();
  }

  componentWillUnmount() {
    // TODO: Add a post request to create the session
    // TODO: Stop the webcam light being on
  }

  render() {
    if (this.props.watch.game.currGame < this.props.watch.game.targetGames) {
      return (
        <ClickGame {...this.props} />);
    } else {
      const i = this.props.watch.studyIndex;
      const currStudy = this.props.studies[i]
      return (
        <div className="watch">
          <img src={currStudy.url} />
        </div>
      );
    }
  }
  }

module.exports = Watch;
