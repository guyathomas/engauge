import React from 'react';
import PropTypes from 'prop-types';

class StudyCard extends React.Component {
    static propTypes = {
      study: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
        views: PropTypes.string,
      }),
    };

    static defaultProps = {
      study: {},
    };

    render() {
      const { title, url, views } = this.props.study;
      return (
        <div>
          <div className="details">
            <div className="title">{ title }</div>
            <div className="session-count">{ views }</div>
          </div>
          <div className="imgwrapper">
            <img src={ url } alt={ title } />
          </div>
        </div>
      );
    }
}

export default StudyCard;
