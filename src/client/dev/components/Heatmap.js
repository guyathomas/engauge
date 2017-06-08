import React from 'react';
import { mergeNArrays, pullKeyFromObjArr, findKeyAtID } from '../../assets/scripts';

class Heatmap extends React.Component {
  constructor(props) {
    super(props);
  }



  renderHeatmap() {
    const { sessionView, studyList } = this.props;
    const selectedStudyCode = studyList.selectedStudy;
    const toggledSessions = sessionView.selected[selectedStudyCode];
    const selectedStudyInd = findKeyAtID(studyList.studies, selectedStudyCode, 'shortCode');
    const sessions = studyList.studies[selectedStudyInd] ? studyList.studies[selectedStudyInd].sessions : [];

    const unsortedSessions = pullKeyFromObjArr(toggledSessions, sessions, 'recording');
    const aggregateData = mergeNArrays(unsortedSessions, (a, b) => (a && b) && (a.time < b.time));
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
