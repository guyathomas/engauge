import React from 'react';
import PropTypes from 'prop-types';
import { isEqual, map } from 'lodash';
import { mergeNArrays, indicesFromSet } from 'utilities/scripts';

class Heatmap extends React.Component {
    static propTypes = {
      studyList: PropTypes.array,
    };

    static defaultProps = {
      studyList: [],
    };

    static scaleData( data, afterSize ) {
      return data.reduce( ( acc, { x, y }) => {
        const dataPoint = {
          x: Math.floor( x * afterSize.x ),
          y: Math.floor( y * afterSize.y ),
        };
        acc.push( dataPoint );
        return acc;
      }, []);
    }

    getActiveStudy() {
      const { selectedStudy, studies } = this.props.studyList;
      return studies[ selectedStudy ];
    }

    renderData() {
    // Turns out the heatmap rendering engine actually renders the locations relative to the size at which it was initialised (stored as properties on the dom element)
    // I would like to actually reference the size of thre image like commented out below, however I have to access the dom element to get the size that the rendering engine thinks it is
    // const { height, width } = this.refs['heatmap-img'];
      const { height, width } = document.getElementsByClassName( 'heatmap-canvas' )[ 0 ];
      const { heatData } = this.props.sessionView;
      const heatmapDimensions = { x: width, y: height };
      const data = Heatmap.scaleData( heatData, heatmapDimensions );
      const collatedData = {
        max: 2,
        min: 0,
        data,
      };
      this.props.sessionView.heatmap.setData( collatedData );
    }

    getSessionsToRender( nextProps ) {
    // Get Sessions from store
      const activeStudy = this.getActiveStudy();

      // Pluck the selected sessions
      if ( activeStudy ) {
        const { sessions, shortCode } = activeStudy;
        const toggledSessions = nextProps.sessionView.selected[ shortCode ];
        const unsortedSessions = indicesFromSet( toggledSessions, sessions );
        const pluckedSessions = map( unsortedSessions, 'recording' );
        const aggregateData = mergeNArrays( pluckedSessions, ( a, b ) => ( a && b ) && ( a.time < b.time ) );

        // Add to the store
        this.props.addHeatData( aggregateData );
      }
    }

    repaintHeatmap() {
      document.getElementsByClassName( 'heatmap-canvas' )[ 0 ].remove();
      const heatmap = this.createHeatmap();
      this.props.createHeatmap( heatmap );
      this.renderData();
    }

    createHeatmap() {
      const heatmap = h337.create({
        container: document.getElementById( 'heatmap-wrapper' ),
        radius: 50,
      });

      return heatmap;
    }

    componentDidMount() {
      const heatmap = this.createHeatmap();
      this.props.createHeatmap( heatmap );

      window.addEventListener( 'resize', _.debounce( this.repaintHeatmap.bind( this ), 100, { trailing: true, maxWait: 100 }) );
    }

    componentWillReceiveProps( nextProps ) {
      const oldStudy = this.props.studyList.selectedStudy;
      const newStudy = nextProps.studyList.selectedStudy;

      // Has the study selection changed?
      // const studyChanged = oldStudy !== newStudy;

      // Has the session selection changed?
      const oldSessionSelection = this.props.sessionView.selected[ oldStudy ];
      const newSessionSelection = nextProps.sessionView.selected[ newStudy ];
      const sessionsChanged = !isEqual( oldSessionSelection, newSessionSelection );

      // Only recalculate the sessions on the state if the session selection has changed or the study selection has changed
      if ( /* studyChanged || */ sessionsChanged ) {
        this.getSessionsToRender( nextProps );
      }
    }

    render() {
      if ( this.refs[ 'heatmap-img' ]) { this.renderData(); }

      const activeStudy = this.getActiveStudy();

      return (
        <div className="heatmap-section">
          <div id="heatmap-wrapper">
            <img ref="heatmap-img" src={ activeStudy && activeStudy.url } />
          </div>
        </div>
      );
    }
}

module.exports = Heatmap;
