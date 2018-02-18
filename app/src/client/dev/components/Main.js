import React from 'react';
import PropTypes from 'prop-types';
import Header from './organisms/Header/Header';
import './Main.styl';

class Main extends React.Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
    };

    render() {
      return (
        <div id="main">
          <Header />
          { this.props.children }
        </div>
      );
    }
}

export default Main;
