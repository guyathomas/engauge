//Working Review however sidebar not populating
import React from 'react';
import { mergeNArrays } from '../../assets/scripts';

console.log(mergeNArrays)
class Heatmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {},
      heatmap: '',
    };
  }

  createHeatmap() {
    console.log('Running create heatmap with')
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
    console.log('Going to add data to heatmap', this.props.activeSession)
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
