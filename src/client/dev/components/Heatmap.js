//Working Review however sidebar not populating
import React from 'react';

class Heatmap extends React.Component {
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
    const { sessions, selectedSessions } = this.props.sessionView;
    const activeStudyIndex = this.props.studyList.selectedStudy;
    const activeStudy = this.props.studyList.studies[activeStudyIndex];

    console.log('sessions, selectedSessions', sessions, selectedSessions, this.props)
    return (
      <div id="heatmap-wrapper">
        <img src={activeStudy.url} />
      </div>
    );
  }
  }

module.exports = Heatmap;
