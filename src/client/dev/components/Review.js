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

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmapContainer'),
      radius: 50,
    });
    return heatmap;
  }

  addHeatData(activeSession) {
    if (activeSession) {
      console.log('this.props.activeSession', this.props.activeSession)
      const heatMapData = {
        max: 2,
        min: 0,
        // data: [{x:25,y:25},{x:36,y:36},{x:47,y:47},{x:58,y:58}],
        data: this.props.activeSession.recording,
      };
      this.state.heatmap.setData(heatMapData);
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    const context = this;
    this.setState({heatmap: context.createHeatmap()})
  }

  componentDidUpdate() {
    this.addHeatData(this.props.activeSession);
  }

  // componentDidMount() {
  //   this.props.activeSession.forEach((item) => {
  //     const newPoint = { x, y, value: 1 };
  //     this.state.heatmap.addData(newPoint);
  //   })
  // }


  render() {
    console.log('The review page!', this.props);
    return (
      <div>
        <div>Review</div>
        <div>{JSON.stringify(this.props.activeSession)}</div>
        <div id="heatmapContainerWrapper">
          heatmap goes here
          <div id="heatmapContainer" />
        </div>
      </div>
    );
  }
  }

module.exports = Review;
