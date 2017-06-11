import React from 'react';
import ClickGame from './ClickGame';
import queries from '../queries';

const Debug = (props) => (
  <div 
    id="watch-debugger"
    style={{width: '50px',
    height: '50px',
    position: 'absolute',
    zIndex: '1',
    top: `${props.x}px`,
    left: `${props.y}px`,
    backgroundColor: 'black'}}
    >
  </div>
)

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
        console.log('SHould only run once')
        this.props.setMetaData(elapsedTime);
      } else {
        const xPercent = data.x / context.refs['watch-img'].width;
        const yPercent = data.y / context.refs['watch-img'].height;
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
  }

  componentWillUnmount() {
    window.webgazer.pause();
    window.webgazerStream.getTracks()[0].stop()
    this.postSession();
  }

  render() {
    if (this.props.watch.game.currGame < this.props.watch.game.targetGames) {
      return (
        <ClickGame {...this.props} />);
    } else {
      const currStudy = this.props.watch.activeStudy.url;
      const currentSession = this.props.watch.newSession;
      const currentPoint = currentSession[currentSession.length - 1] || { x: 0, y: 0 };
      return (
        <div className="watch">
          {window.debug && <Debug x={currentPoint.x * this.refs['watch-img'].width } y={currentPoint.y * this.refs['watch-img'].height }/> }
          <img ref="watch-img" src={currStudy} />
        </div>
      );
    }
  }
  }

module.exports = Watch;
