import React from 'react';
import ClickGame from './ClickGame';
import queries from '../queries';

const Debug = (props) => {
  webgazer.showPredictionPoints(true)
  const currentPoint = props.currentSession[props.currentSession.length - 1] || { x: 0, y: 0 };
  let { x, y } = currentPoint;
  const size = 40;
  x *= props.image.width;
  y *= props.image.height;
  return (
    <div 
      id="watch-debugger"
      style={{width: `${size}px`,
      height: `${size}px`,
      position: 'absolute',
      zIndex: '10',
      top: `${y}px`,
      left: `${x}px`,
      backgroundColor: 'black'}}
      >
    </div>
  );
};

class Watch extends React.Component {
  constructor(props) {
    super(props);
  }

  startGazeListener() {
    webgazer.setGazeListener((data, elapsedTime) => {
      // Don't send the data if there is no coordinates or is currently in training
      // TODO: Change this to be an implied reference in the redux store
      const context = this;
      if (data == null || this.props.watch.game.currGame < this.props.watch.game.targetGames) { return; }
      if (!this.props.watch.metaData.startTime) {
        this.props.setMetaData(elapsedTime);
      } else {
        const dataInBounds = webgazer.util.bound(data);
        const xPercent = dataInBounds.x / context.refs['watch-img'].width;
        const yPercent = dataInBounds.y / context.refs['watch-img'].height;
        
        const timeSinceStart = Math.floor(elapsedTime - context.props.watch.metaData.startTime);
        context.props.addSessionPoint(xPercent, yPercent, timeSinceStart);
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
    const duration = newSession[newSession.length - 1].time - newSession[0].time;
    fetch('/graphql', {
      ...queries.headers,
      ...queries.postSession(newSession, duration, this.props.params.shortCode),
    })
    .then(res => console.log('res', res))
    .catch(err => console.log('err', err));
  }

  componentDidMount() {
    const shortCode = this.props.params.shortCode;
    this.getStudy(shortCode);
    this.startGazeListener();
    window.debug = true;
  }

  componentWillUnmount() {
    this.postSession();
    window.webgazer.pause();
    window.webgazerStream.getTracks()[0].stop();
  }

  render() {
    if (this.props.watch.game.currGame < this.props.watch.game.targetGames) {
      return (
        <ClickGame {...this.props} />);
    } else {
      const currStudy = this.props.watch.activeStudy.url;
      return (
        <div className="watch">
          {window.debug && this.refs['watch-img'] && <Debug currentSession={this.props.watch.newSession} image={this.refs['watch-img'] }/> }
          <img ref="watch-img" src={currStudy} />
        </div>
      );
    }
  }
  }

module.exports = Watch;
