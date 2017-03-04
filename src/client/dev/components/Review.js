import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: {},
    };
  }

  fetchImage(shortCode) {
    fetch('/api/longURL', {
      method: 'get',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({ shortCode }),
    })
    .then((response) => {
      console.log('The raw response from the fetch is ', response, typeof response);
      return response;
    })
    .then((imageURL) => {
      console.log('The shortCode is ', shortCode);
      this.setState({ imageURL });
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>Review</div>
    );
  }
  }

module.exports = Review;
