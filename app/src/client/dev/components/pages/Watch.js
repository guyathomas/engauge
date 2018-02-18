import React from 'react';
import ClickGame from './ClickGame';
import queries from '../../queries';

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
<<<<<<< HEAD

  componentDidMount() {
    console.log('Component Did Mount');
  }

||||||| parent of 9339f4e... Client is establishing socket connection with server succesfully
=======

<<<<<<< HEAD
  openSocket() {
    const socket = io.connect(window.location.origin, { secure: true, port: 433 });
    socket.on('connect', () => {
      console.log('Client has opened the connection');
    });
    socket.on('disconnect', () => {
      console.log('about to terminate the socket connection');
    });
    this.setState({ socket });
  }

>>>>>>> 9339f4e... Client is establishing socket connection with server succesfully
||||||| parent of 828289e... Remove socket connection
  openSocket() {
    const socket = io.connect(window.location.origin, { secure: true, port: 433 });
    socket.on('connect', () => {
      console.log('Client has opened the connection');
    });
    socket.on('disconnect', () => {
      console.log('about to terminate the socket connection');
    });
    this.setState({ socket });
  }

=======
>>>>>>> 828289e... Remove socket connection
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
||||||| parent of 9339f4e... Client is establishing socket connection with server succesfully
  componentDidMount() {
    this.startGazeListener();
  }


=======
||||||| parent of df9dfbf... Image now dynamically comes through on watch page
=======
  getSessions(shortCode) {
||||||| parent of 2a356fc... Watch now stops using camera on unmounting of component
  getSessions(shortCode) {
=======
  getStudy(shortCode) {
>>>>>>> 2a356fc... Watch now stops using camera on unmounting of component
    fetch('/graphql', {
      ...queries.headers,
      ...queries.getStudy(shortCode),
    })
    .then(response => response.json())
    .then(({ data }) => {
      this.props.updateWatchStudy(data.study);
    });
  }

<<<<<<< HEAD
>>>>>>> df9dfbf... Image now dynamically comes through on watch page
||||||| parent of d0a68c7... Implement posting of session data with graphql
=======
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

>>>>>>> d0a68c7... Implement posting of session data with graphql
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

<<<<<<< HEAD
  completeTraining() {
    this.setState({ isTraining: false });
  }

>>>>>>> 9339f4e... Client is establishing socket connection with server succesfully
||||||| parent of 187b1f7... Migrate clickgame to use redux state
  completeTraining() {
    this.setState({ isTraining: false });
  }

=======
>>>>>>> 187b1f7... Migrate clickgame to use redux state
  render() {
    const { currGame, targetGames } = this.props.watch.game;
    if ( currGame < targetGames) {
      return (
        <ClickGame {...this.props} />);
    } else {
      const { newSession, activeStudy } = this.props.watch
      const currStudy = activeStudy.url;
      return (
        <div className="watch">
          {window.debug && this.refs['watch-img'] && <Debug currentSession={newSession} image={this.refs['watch-img'] }/> }
          <img ref="watch-img" src={currStudy} />
        </div>
      );
    }
  }
  }

module.exports = Watch;
