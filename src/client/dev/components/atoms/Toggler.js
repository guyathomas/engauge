import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { side: 'left' };
  }

  toggleActive() {
  	const newSide = this.state.side === 'left' ? 'right' : 'left';
  	this.setState({ side: newSide });
  }

  render() {
    return (
      <div className="toggler" onClick={this.toggleActive.bind(this)}>
        <div style={{ [this.state.side]: 0 }} className="highlighted" />
        <div className={`left${this.state.side === 'left' ? ' active' : ''}`}>All Studies</div>
        <div className={`right${this.state.side === 'right' ? ' active' : ''}`}>Only Mine</div>
      </div>
    );
  }
}

export default Toggler;
