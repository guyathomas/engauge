import React from 'react';
import { mergeNArrays, pluckFromSet, findKeyAtID, isSetEqual, standardizeSize } from '../../assets/scripts';

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

  repaintHeatmap() {
    document.getElementsByClassName('heatmap-canvas')[0].remove();
    const heatmap = this.createHeatmap();
    this.props.createHeatmap(heatmap);
    this.renderData()
    console.log('Window resized')
  }

  scaleData (data, beforeSize, afterSize) {
    const result = [];

    for (var i = 0; i < data.length; i++) {
      const xRatio = afterSize.x / beforeSize.x;
      const yRatio = afterSize.y / beforeSize.y;
      const dataPoint = {
        x: Math.floor(xRatio * data[i].x),
        y: Math.floor(yRatio * data[i].y)
      };
      result.push(dataPoint);
    }
    return result;
  }

  renderData() {
    // Turns out the heatmap rendering engine actually renders the locations relative to the size at which it was initialised (stored as properties on the dom element)
    // I would like to actually reference the size of thre image like commented out below, however I have to access the dom element to get the size that the rendering engine thinks it is
    // const { height, width } = this.refs['heatmap-img'];
    const { height, width } = document.getElementsByClassName('heatmap-canvas')[0];
    const afterSize = { x: width, y: height };
    console.log('afterSize', afterSize)
    const data = this.scaleData(this.props.sessionView.heatData, this.props.sessionView.defaultDataSize, afterSize);
    const heatData = {
      max: 2,
      min: 0,
      data: data,
    };
    console.log('Will now render this data', heatData)
    this.props.sessionView.heatmap.setData(heatData);
  }

  getSessionsToRender(nextProps) {
    // Get Sessions from store
    const activeStudy = this.getActiveStudyFromProps(nextProps);
    const sessions = activeStudy ? activeStudy.sessions : [];
    
    // Pluck the selected sessions
    if (activeStudy) {
      const activeStudyCode = activeStudy.shortCode;
      const toggledSessions = nextProps.sessionView.selected[activeStudyCode];
      const unsortedSessions = pluckFromSet(toggledSessions, sessions);
      //Scale / standardize the data
      const standardizedSessions = standardizeSize(unsortedSessions, this.props.sessionView.defaultDataSize);
      const aggregateData = mergeNArrays(standardizedSessions, (a, b) => (a && b) && (a.time < b.time));

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

    // This makes it quite laggy because it recreates the entire heatmap every time.
    // But there is a bug with how the heatmap library will render everything in a way that is skewed if the browser is resized
    window.addEventListener("resize", this.repaintHeatmap.bind(this));
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
    if (this.refs['heatmap-img']) {this.renderData();}
    
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
