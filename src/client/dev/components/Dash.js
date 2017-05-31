import React from 'react';
import AccountStats from './AccountStats';
import StudyList from './StudyList';
import SessionView from './SessionView';

const Dash = props => (
  <div clasName="dash">
    <AccountStats />
    <div className="review-container">
      <StudyList />
      <SessionView {...props} />
    </div>
  </div>
);


export default Dash;
