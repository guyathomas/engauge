// Trying to avoid using this file

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="app-container">{this.props.children}</div>;
  }
}


module.exports = App;
