import React from 'react';
import AccountStats from '../organisms/AccountStats';
import StudyList from '../organisms/StudyList';
import SessionView from '../organisms/SessionView';

const Dash = props => (
  <div id="dash">
    <AccountStats {...props} />
    <StudyList {...props} />
    <SessionView {...props} />
  </div>
);

export default Dash;
