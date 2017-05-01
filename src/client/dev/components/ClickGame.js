import React from 'react';

const Cirlce = (props) => {
  console.log('Nextgame passed', props.nextGame)
  const containerSize = (props.circle.r + props.circle.pad) * 2;
  const circleR = props.circle.r;
  return (
    <svg
      onClick={props.nextGame}
      style={{ position: 'relative', left: `${props.left}px`, top: `${props.top}px`, width: containerSize, height: containerSize }} >
      <circle cx={circleR} cy={circleR} r={circleR - 4} fill="black" stroke="black" strokeWidth="2" ></circle>
      <circle transform="rotate(-90 40 40)" cx={circleR} cy={circleR} r={circleR - 4} fill="transparent" stroke="black" strokeWidth="5" className="circle-overlay"></circle>
    </svg>
    );
};

class ClickGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: {
        leftPerc: 0.50,
        topPerc: 0.50,
      },
      windowSize: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
      circle: {
        r: 40,
        pad: 10,
      },
      targetGames: 5,
      currGame: 1,
    };
  }

  componentDidMount() {
    const context = this;
    window.addEventListener('resize', () => {
      context.setState({
        windowSize: {
          height: window.innerHeight,
          width: window.innerWidth,
        },
      });
    });
  }

  posInBounds(locPerc, planeSize, objSize) {
    return ((planeSize - objSize) * locPerc);
  }

  nextGame() {
    console.log('nextGame run', this.state);
    this.setState({
      loc: {
        leftPerc: Math.random(),
        topPerc: Math.random(),
      },
      currGame: this.state.currGame + 1,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.currGame < nextState.targetGames) {
      return true;
    } else {
      this.props.completeTraining();
      return false;
    }
  }

  render() {
    const left = this.posInBounds(this.state.loc.leftPerc, this.state.windowSize.width, this.state.circle.r * 2);
    const top = this.posInBounds(this.state.loc.topPerc, this.state.windowSize.height, this.state.circle.r * 2);
    return (
      <Cirlce
        nextGame={this.nextGame.bind(this)}
        left={left}
        top={top}
        circle={this.state.circle}
      />
    );
  }
}

module.exports = ClickGame;
