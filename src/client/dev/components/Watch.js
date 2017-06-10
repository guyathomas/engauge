import React from 'react';
import ClickGame from './ClickGame';
import queries from '../queries';
class Watch extends React.Component {
  constructor(props) {
    super(props);
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      // Don't send the data if there is no coordinates or is currently in training
      // TODO: Change this to be an implied reference in the redux store
      if (data == null || this.props.watch.game.currGame < this.props.watch.game.targetGames) { return; }
      if (!this.props.watch.metaData.startTime) {
        this.props.setMetaData(
          elapsedTime, 
          {
            x: $('.watch img').width, 
            y: $('.watch img').height
          })
      } else {
        this.props.addSessionPoint(data.x, data.y, Math.floor(elapsedTime - this.props.watch.metaData.startTime));
      }
    }).begin();
  }

  getStudy(shortCode) {
    fetch('/graphql', {
      ...queries.headers,
      ...queries.getStudy(shortCode),
    })
    .then(response => response.json())
    .then(({ data }) => {
      this.props.updateWatchStudy(data.study);
    });
  }

  postSession() {
    const newSession = this.props.watch.newSession;
    const metaData = this.props.watch.metaData;
    const duration = newSession[newSession.length - 1].time - newSession[0].time
    fetch('/graphql', {
      ...queries.headers,
      ...queries.postSession(newSession, duration, metaData.screenSize, this.props.params.shortCode),
    })
    .catch((err) => {console.log('err',  err)})
  }

  componentDidMount() {
    const shortCode = this.props.params.shortCode;
    this.getStudy(shortCode);
    this.startGazeListener();
  }

  componentWillUnmount() {
    window.webgazer.pause();
    window.webgazerStream.getTracks()[0].stop()
    this.postSession();
    // TODO: Stop the webcam light being on
  }

  render() {
    if (this.props.watch.game.currGame < this.props.watch.game.targetGames) {
      return (
        <ClickGame {...this.props} />);
    } else {
      const currStudy = this.props.watch.activeStudy.url;
      return (
        <div className="watch">
          <img src={currStudy} />
        </div>
      );
    }
  }
  }

module.exports = Watch;
