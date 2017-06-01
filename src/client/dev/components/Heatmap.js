//Working Review however sidebar not populating
import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {},
      heatmap: '',
    };
  }

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmapContainer'),
      radius: 50,
    });
    return heatmap;
  }

  addHeatData(activeSession) {
    if (activeSession) {
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
    const context = this;
    this.setState({heatmap: context.createHeatmap()})
  }

  componentDidUpdate() {
    this.addHeatData(this.props.activeSession);
  }

  render() {
    return (
      <div id="heatmapContainerWrapper">
        <div id="heatmapContainer">
          <img src={this.props.studyURL} /> 
        </div>
      </div>
    );
  }
  }

module.exports = Review;
