import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'components/atoms/Toggle/Toggle';
import Search from 'components/atoms/Search/Search';

class Filter extends React.Component {
    static propTypes = {
      studyCount: PropTypes.number,
    };

    static defaultProps = {
      studyCount: 0,
    };

    render() {
      const { studyCount } = this.props;
      return (
        <div className="filter-container">
          <div className="filters">
            <Search />
            <Toggle />
          </div>
          <div className="results">
            { `${ studyCount } ${ ( studyCount === 1 ? 'study' : 'studies' ) } found` }
          </div>
        </div>
      );
    }
}

export default Filter;
