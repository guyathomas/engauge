import React from 'react';
import Header from './organisms/Header/Header';
import './Main.styl';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Header { ...this.props } />
        { /* { React.cloneElement( this.props.children, { ...this.props }) } */ }
        { /* Clone element can cause duplicate components that are deeply nested in the router */ }
      </div>
    );
  }
}

export default Main;
