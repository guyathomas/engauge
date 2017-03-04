import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: 'test url',
    };
  }

  // fetchImage(shortCode) {
  //   fetch('/api/longURL', {
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/JSON',
  //     },
  //     body: JSON.stringify({ shortCode }),
  //   })
  //   .then((response) => {
  //     console.log('The raw response from the fetch is ', response, typeof response);
  //     return response.json();
  //   })
  //   .then((imageURL) => {
  //     console.log('The shortCode is ', shortCode);
  //     // this.setState({ imageURL });
  //   });
  // }

  render() {
    console.log('The review page!', this.props);
    return (
      <div>
        <div>Review</div>
        <div>{this.state.imageURL}</div>
      </div>
    );
  }
  }

module.exports = Review;
