import React from 'react';
import AccountStats from './AccountStats';
import StudyList from './StudyList';
import SessionView from './SessionView';

const ReviewContainer = (props) => (
	<div className="review-container">
	  <StudyList {...props} />
	  <SessionView {...props} />
	</div>
)

const Dash = props => (
  <div className="dash">
    <AccountStats {...props} />
    <ReviewContainer {...props} />
  </div>
);


export default Dash;
