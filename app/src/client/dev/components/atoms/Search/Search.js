import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

class Search extends React.Component {
    static propTypes = {
      onKeyUp: PropTypes.func,
    };

    static defaultProps = {
      onKeyUp: noop,
    };

    render() {
      return (
        <input className="search" type="text" placeholder="Search" onKeyUp={ this.props.onKeyUp } />
      );
    }
}

export default Search;
