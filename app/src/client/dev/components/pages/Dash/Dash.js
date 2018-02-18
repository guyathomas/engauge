import React from 'react';
import AccountStats from 'components/organisms/AccountStats';
import StudyList from 'components/organisms/StudyList';
import SessionContainer from 'components/organisms/SessionContainer';

class Dash extends React.Component {
  render() {
    return (
      <div id="dash">
        <AccountStats { ...this.props } />
        <StudyList { ...this.props } />
        <SessionContainer { ...this.props } />
      </div>
    );
  }
}

export default Dash;
