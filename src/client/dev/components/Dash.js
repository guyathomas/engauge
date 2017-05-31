import React from 'react';
import AccountStats from './AccountStats';
import StudyList from './StudyList';
import SessionView from './SessionView';

const Dash = props => (
  <div clasName="dash">
	<AccountStats />
    <StudyList />
    <SessionView {...props} />
  </div>
)


export default Dash;
