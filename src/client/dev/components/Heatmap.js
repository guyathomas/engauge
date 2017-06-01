//Working Review however sidebar not populating
import React from 'react';
import { mergeNArrays, pull } from '../../assets/scripts';

class Heatmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  addHeatData(activeSession) {
    const { selectedSessions, sessions } = this.props.sessionView;
    
    const unsortedSessions = pull(selectedSessions, sessions, 'recording');
    const test = [...unsortedSessions, ...unsortedSessions]
    const aggregateData = mergeNArrays(test, (a, b) => (a && b) && (a.time < b.time));

    if (aggregateData.length > 0) {
      const heatMapData = {
        max: 2,
        min: 0,
        data: aggregateData,
      };
      console.log('Just before sending the action', heatMapData)
      this.props.renderHeatmapData(heatMapData);
      // this.state.heatmap.setData(heatMapData);
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
    console.log('Will add heat data')
    this.addHeatData();
  }

  componentWillReceiveProps() {
  }

  render() {
    const { sessions, selectedSessions } = this.props.sessionView;
    const activeStudyIndex = this.props.studyList.selectedStudy;
    const activeStudy = this.props.studyList.studies[activeStudyIndex];
    console.log(activeStudy.url)
    return (
            <div className="heatmap-section">
              <div id="heatmap-wrapper">
                <img src={activeStudy.url} />
              </div>
            </div>
    );
  }
  }

module.exports = Heatmap;
