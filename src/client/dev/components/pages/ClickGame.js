import React from 'react';

const Cirlce = (props) => {
  const containerSize = (props.circle.r) * 2;
  const circleR = props.circle.r;
  return (
    <svg
      onClick={props.nextClickgame}
      style={{ position: 'relative', left: `${props.left}px`, top: `${props.top}px`, width: containerSize, height: containerSize }} >
      <circle cx={circleR} cy={circleR} r={circleR - 4} fill="black" stroke="black" strokeWidth="2" ></circle>
      <circle transform="rotate(-90 40 40)" cx={circleR} cy={circleR} r={circleR - 4} fill="transparent" stroke="black" strokeWidth="5" className="circle-overlay"></circle>
    </svg>
    );
};

class ClickGame extends React.Component {
  constructor(props) {
    super(props);
  }

  posInBounds(locPerc, planeSize, objSize) {
    return ((planeSize - objSize) * locPerc);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.watch.game.currGame < nextProps.watch.game.targetGames) {
      return true;
    } else {
      this.props.completeTraining();
      return false;
    }
  }

  render() {

    const { loc, circle, targetGames, currGame } = this.props.watch.game;
    const left = this.posInBounds(loc.leftPerc, window.innerWidth, circle.r * 2);
    const top = this.posInBounds(loc.topPerc, window.innerHeight, circle.r * 2);
    const gamesLeft = targetGames - currGame;
    const statusText = `Click the circle ${gamesLeft} time${gamesLeft > 1 ? 's' : ''} to train your Webcam`;
    return (
      <div>
        <div className="instructions">{statusText}</div>
        <Cirlce
          { ...this.props }
          left={left}
          top={top}
          circle={circle}
        />
      </div>
    );
  }
}

module.exports = ClickGame;
