import React from 'react';
import PropTypes from 'prop-types';
import StudyCard from 'components/molecules/StudyCard';

class StudyList extends React.Component {
    static propTypes = {
      studies: PropTypes.array,
    };

    static defaultProps = {
      studies: [],
    };

    render() {
      return (
        <div className="studies-container">
          { this.props.studies.map( study => <StudyCard study={ study } /> ) }
        </div>
      );
    }
}

export default StudyList;
