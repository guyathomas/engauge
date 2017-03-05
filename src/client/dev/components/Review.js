import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      hasTrained: false,
      heatmap: '',
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

  componentDidMount() {
    
  }

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmapContainer'),
      radius: 50,
    });

    this.props.activeSession.recording.forEach((item) => {
      this.heatmap.addData(item.x, item.y);
    });

    return heatmap;
  }

  // addHeat(x, y) {
  //   const newPoint = { x, y, value: 1 };
  //   this.heatmap.addData(newPoint);
  // }

  componentDidUpdate() {
    //Re render heatmap
    this.heatmap = this.createHeatmap();

  }


  render() {
    console.log('The review page!', this.props);
    return (
      <div>
        <div>Review</div>
        <div id={'heatmapContainer'}></div>
        <div>{JSON.stringify(this.props.activeSession)}</div>
      </div>
    );
  }
  }

module.exports = Review;
