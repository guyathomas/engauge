import React from 'react';
import PropTypes from 'prop-types';

class StudyCard extends React.Component {
    static propTypes = {
      study: PropTypes.shape({
        url: PropTypes.string,
      }),
    };

    static defaultProps = {
      study: {},
    };

    render() {
      const { url } = this.props.study;
      return (
        <div>
          <div className="details">
            <div className="title">Default Name</div>
            <div className="session-count">Session Count</div>
          </div>
          <div className="imgwrapper">
            <img src={ url } />
          </div>
        </div>
      );
    }
}

module.exports = StudyCard;
