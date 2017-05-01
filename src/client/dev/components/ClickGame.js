import React from 'react';

const Cirlce = (props) => {
  const containerSize = props.circleR * 2;
  return (
      <svg height={containerSize} width={containerSize} style={{ position: 'relative', left: `${props.left}px`, top: `${props.top}px` }}>
        <circle cx={props.circleR} cy={props.circleR} r={props.circleR} fill="red" onClick={props.nextGame} />
        Sorry, your browser does not support inline SVG.
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
      circleR: 40,
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

  updateLocation() {
    this.props.nextGame();
    this.setState({
      loc: {
        leftPerc: Math.random(),
        topPerc: Math.random(),
      },
    });
  }


  render() {
    const left = this.posInBounds(this.state.loc.leftPerc, this.state.windowSize.width, this.state.circleR * 2);
    const top = this.posInBounds(this.state.loc.topPerc, this.state.windowSize.height, this.state.circleR * 2);
    return (
      <Cirlce
        nextGame={this.updateLocation.bind(this)}
        left={left}
        top={top}
        circleR={this.state.circleR}
      />
    );
  }
}

module.exports = ClickGame;
