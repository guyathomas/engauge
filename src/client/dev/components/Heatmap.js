import React from 'react';
import { mergeNArrays, pluckFromSet, findKeyAtID, scaleData, isSetEqual, standardizeSize } from '../../assets/scripts';

class Heatmap extends React.Component {
  constructor(props) {
    super(props);
  }

  getActiveStudyFromProps(props) {
    const { studyList } = props;
    const selectedStudyCode = studyList.selectedStudy;
    const selectedStudyInd = findKeyAtID(studyList.studies, selectedStudyCode, 'shortCode');
    const activeStudy = props.studyList.studies[selectedStudyInd];
    return activeStudy;
  }

  scaleData (data, beforeSize, afterSize) {
    const xRatio = afterSize.x / beforeSize.x;
    const yRatio = afterSize.y / beforeSize.y;
    const result = {
      x: Math.floor(xRatio * data.x),
      y: Math.floor(yRatio * data.y)
    }
    return result;
  }

  renderData() {

  }

  renderScaledHeatData(imageSize) {
    const afterSize = { x: this.refs['heatmap-img'].width, y: this.refs['heatmap-img'].height };
    const beforeSize = ''


    const heatMapData = {
      max: 2,
      min: 0,
      data: aggregateData,
    };
    this.props.sessionView.heatmap && this.props.sessionView.heatmap.setData(heatMapData);
  }

  getSessionsToRender(nextProps) {
    //Get Sessions from store
    const activeStudy = this.getActiveStudyFromProps(nextProps);
    const sessions = activeStudy ? activeStudy.sessions : [];
    //Pluck the selected sessions
    if (activeStudy) {
      const activeStudyCode = activeStudy.shortCode;
      const toggledSessions = nextProps.sessionView.selected[activeStudyCode];
      const unsortedSessions = pluckFromSet(toggledSessions, sessions);
      //Scale / standardize the data
      const standardizedSessions = standardizeSize(unsortedSessions, this.props.sessionView.defaultDataSize);
      const aggregateData = mergeNArrays(standardizedSessions, (a, b) => (a && b) && (a.time < b.time));

      //Add to the store
      this.props.addHeatData(aggregateData);

      //Render the new data
      // this.renderData();
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
    const heatmap = this.createHeatmap();
    this.props.createHeatmap(heatmap);
  }

  componentWillReceiveProps(nextProps) {
    const oldStudy = this.props.studyList.selectedStudy;
    const newStudy = nextProps.studyList.selectedStudy;
    
    // Has the study selection changed?
    // const studyChanged = oldStudy !== newStudy;

    // Has the session selection changed?
    const oldSessionSelection = this.props.sessionView.selected[oldStudy];
    const newSessionSelection = nextProps.sessionView.selected[newStudy]
    const sessionsChanged = !isSetEqual(oldSessionSelection, newSessionSelection);

    // Only recalculate the sessions on the state if the session selection has changed or the study selection has changed
    if (/*studyChanged ||*/ sessionsChanged) {
      this.getSessionsToRender(nextProps);
    }
  }

  render() {
    const activeStudy = this.getActiveStudyFromProps(this.props);

    return (
            <div className="heatmap-section">
              <div id="heatmap-wrapper">
                <img ref="heatmap-img" src={activeStudy && activeStudy.url} />
              </div>
            </div>
    );
  }
  }

module.exports = Heatmap;
