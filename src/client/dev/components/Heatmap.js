import React from 'react';
import { mergeNArrays, pullKeyFromObjArr } from '../../assets/scripts';

class Heatmap extends React.Component {
  constructor(props) {
    super(props);
  }



  renderHeatmap() {
    const { sessionView, studyList } = this.props;
    const selectedSessions = sessionView.selectedSessions;
    const selectedStudy = studyList.selectedStudy;
    const sessions = studyList.studies[selectedStudy] ? studyList.studies[selectedStudy].sessions : [];
    
    const unsortedSessions = pullKeyFromObjArr(selectedSessions, sessions, 'recording');
    const aggregateData = mergeNArrays(unsortedSessions, (a, b) => (a && b) && (a.time < b.time));

      console.log('About to pass this data to render on heatmap',aggregateData )
        if (aggregateData.length > 0) {
          const heatMapData = {
            max: 2,
            min: 0,
            data: aggregateData,
          };
          this.props.renderHeatmapData(heatMapData)
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
    this.renderHeatmap();
  }

  componentWillReceiveProps() {
    this.renderHeatmap();
  }

  render() {
    const selectedSessions = this.props.sessionView.selectedSessions;
    const selectedStudyIndex = this.props.studyList.selectedStudy;
    const activeStudy = this.props.studyList.studies[selectedStudyIndex];
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
