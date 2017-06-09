import React from 'react';
import { mergeNArrays, pullKeyFromObjArr, findKeyAtID } from '../../assets/scripts';

class Heatmap extends React.Component {
  constructor(props) {
    super(props);
  }



  renderHeatData(nextProps) {
    const { sessionView, studyList } = nextProps;
    const selectedStudyCode = studyList.selectedStudy;
    const toggledSessions = sessionView.selected[selectedStudyCode];
    const selectedStudyInd = findKeyAtID(studyList.studies, selectedStudyCode, 'shortCode');
    const sessions = studyList.studies[selectedStudyInd] ? studyList.studies[selectedStudyInd].sessions : [];

    const unsortedSessions = pullKeyFromObjArr(toggledSessions, sessions, 'recording');
    const aggregateData = mergeNArrays(unsortedSessions, (a, b) => (a && b) && (a.time < b.time));
    const heatMapData = {
      max: 2,
      min: 0,
      data: aggregateData,
    };
    this.props.sessionView.heatmap && this.props.sessionView.heatmap.setData(heatMapData);
  }

  createHeatmap() {
    const heatmap = h337.create({
      container: document.getElementById('heatmap-wrapper'),
      radius: 50,
    });

    console.log(window.hm = heatmap);
    return heatmap;
  }

  componentDidMount() {
    const heatmap = this.createHeatmap()
    this.props.createHeatmap(heatmap)
  }

  componentWillReceiveProps(nextProps) {
    this.renderHeatData(nextProps);
    document.getElementById('heatmap-wrapper')
  }

  render() {
    const { sessionView, studyList } = this.props;
    const selectedStudyCode = studyList.selectedStudy;
    const toggledSessions = sessionView.selected[selectedStudyCode];
    const selectedStudyInd = findKeyAtID(studyList.studies, selectedStudyCode, 'shortCode');
    const activeStudy = this.props.studyList.studies[selectedStudyInd];

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
