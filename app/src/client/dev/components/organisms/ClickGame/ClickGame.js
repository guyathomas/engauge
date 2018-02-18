import React from 'react';

class ClickGame extends React.Component {
  constructor( props ) {
    super( props );
  }
  shouldComponentUpdate( nextProps ) {
    if ( nextProps.watch.game.currGame < nextProps.watch.game.targetGames ) {
      return true;
    }
    this.props.completeTraining();
    return false;
  }

  posInBounds( locPerc, planeSize, objSize ) {
    return ( ( planeSize - objSize ) * locPerc );
  }

  renderCircle() {
    const containerSize = ( this.circle.r ) * 2;
    const circleR = this.props.circle.r;
    return (
      <svg
        onClick={ this.props.nextClickgame }
        style={{ position: 'relative', left: `${ this.props.left }px`, top: `${ this.props.top }px`, width: containerSize, height: containerSize }}
      >
        <circle cx={ circleR } cy={ circleR } r={ circleR - 4 } fill="black" stroke="black" strokeWidth="2" />
        <circle transform="rotate(-90 40 40)" cx={ circleR } cy={ circleR } r={ circleR - 4 } fill="transparent" stroke="black" strokeWidth="5" className="circle-overlay" />
      </svg>
    );
  }
  render() {
    const { loc, circle, targetGames, currGame } = this.props.watch.game;
    const left = this.posInBounds( loc.leftPerc, window.innerWidth, circle.r * 2 );
    const top = this.posInBounds( loc.topPerc, window.innerHeight, circle.r * 2 );
    const gamesLeft = targetGames - currGame;
    const statusText = `Click the circle ${ gamesLeft } time${ gamesLeft > 1 ? 's' : '' } to train your Webcam`;
    return (
      <div>
        <div className="instructions">{ statusText }</div>
        { this.renderCircle() }
      </div>
    );
  }
}

module.exports = ClickGame;
