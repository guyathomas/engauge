import React from 'react';
import Stats from './Stats';
import StudyList from './StudyList';
import SessionView from './SessionView';

const Dash = props => (
  <div clasName="dash">
	<Stats />
    <StudyList />
    <SessionView {...props} />
  </div>
)


export default Dash;
