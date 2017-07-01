import React from 'react';
import AccountStats from '../organisms/AccountStats';
import StudyList from '../organisms/StudyList';
import SessionView from '../organisms/SessionView';

const ReviewContainer = props => (
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
