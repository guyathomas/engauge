import React from 'react';
import AccountStats from 'components/organisms/AccountStats';
import StudyList from 'components/organisms/StudyList';

// import SessionContainer from 'components/organisms/SessionContainer';

class Dash extends React.Component {
  render() {
    console.log( this.props );
    return (
      <div id="dash">
        <AccountStats />
        <StudyList { ...this.props } />
        { /* <SessionContainer { ...this.props } /> */ }
      </div>
    );
  }
}

export default Dash;
