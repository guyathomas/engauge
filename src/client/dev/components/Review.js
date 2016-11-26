import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>Review</div>
    );
  }
  }

module.exports = Review;
