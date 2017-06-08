import React from 'react';
import { mergeNArrays, pull } from '../../assets/scripts';

class Heatmap extends React.Component {
  constructor(props) {
    super(props);
  }



  addHeatData(activeSession) {
    const selectedSessions = this.props.sessionView.selectedSessions;
    const activeStudy = this.props.studyList.selectedStudy;
    const sessions = this.props.studyList.studies[activeStudy];
    
    const unsortedSessions = pull(selectedSessions, sessions, 'recording');
    const aggregateData = mergeNArrays(unsortedSessions, (a, b) => (a && b) && (a.time < b.time));
    console.log('The aggregateData to be added', aggregateData)
    if (aggregateData.length > 0) {
      const heatMapData = {
        max: 2,
        min: 0,
        data: aggregateData,
      };
      this.props.renderHeatmapData(heatMapData);
    }
  }

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmap-wrapper'),
      radius: 50,
    });
    return heatmap;
  }

  componentDidMount() {
    const heatmap = this.createHeatmap()
    this.props.createHeatmap(heatmap)
    this.addHeatData();
  }

  componentWillReceiveProps() {
    console.log('Will recieve props')
    this.addHeatData();
  }

  render() {
    const { sessions, selectedSessions } = this.props.sessionView;
    const activeStudyIndex = this.props.studyList.selectedStudy;
    const activeStudy = this.props.studyList.studies[activeStudyIndex];
    return (
            <div className="heatmap-section">
              <div id="heatmap-wrapper">
                <img src={activeStudy && activeStudy.url} />
              </div>
            </div>
    );
  }
  }

module.exports = Heatmap;
