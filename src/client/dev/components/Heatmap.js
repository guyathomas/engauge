import React from 'react';
import { mergeNArrays, pluckFromSetAtKey, findKeyAtID, scaleData, isSetEqual } from '../../assets/scripts';

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

  scaleData(data, beforeSize, afterSize) {
    
  }

  renderScaledHeatData(imageSize) {
    const scaledSessions = [];
    for (var i = 0; i < sessions.length; i++) {
      const tempSession = [];
      for (var j = 0; j < sessions[i].recording.length; j++) {
        const scaledPoint = scaleData(
          sessions[i].recording[j], 
          sessions[i].screenSize, 
          {
            x: this.refs['heatmap-img'].width,
            y: this.refs['heatmap-img'].height,
          }
        )
        tempSession.push(scaledPoint);
      }
      scaledSessions.push(tempSession);
    }
    //Call renderScaledHeatmap

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
      const unsortedSessions = pluckFromSetAtKey(toggledSessions, sessions, 'recording');
      const aggregateData = mergeNArrays(unsortedSessions, (a, b) => (a && b) && (a.time < b.time));

      //Add to the store
      this.props.addHeatData(aggregateData);
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
