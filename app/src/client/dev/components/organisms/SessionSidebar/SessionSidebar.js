import React from 'react';

const findKeyAtID = () => null;

class SessionSidebar extends React.Component {
  constructor( props ) {
    super( props );
  }

  renderSession() {
    const { selected, session, toggleSession, durationString, i, shortCode } = this.props;
    return (
      <div className={ `session${ selected ? ' selected' : '' }` } key={ session.id } onClick={ toggleSession.bind( this, i, shortCode ) }>
        <div className="user">{ session.user || 'Anonymous' }</div>
        <div className="details">
          <div className="date">{ ( session.createdAt && session.createdAt.split( ' ' ).slice( 1, 3 ).join( ' ' ) ) || 'recently' }</div>
          <div className="duration">{ durationString }</div>
        </div>
      </div>
    );
  }

  render() {
    const { studies, selectedStudy } = this.props.studyList;
    const selectedStudyInd = findKeyAtID( studies, selectedStudy, 'shortCode' );
    if ( !this.props.sessionView.selected[ selectedStudy ]) {
      this.props.sessionView.selected[ selectedStudy ] = new Set();

      // TODO: This causes error "Warning: setState(...): " need to call this function outside the render method
      this.props.toggleSession( 0, this.props.studyList.selectedStudy );
    }
    if ( studies[ selectedStudyInd ] && studies[ selectedStudyInd ].sessions.length > 0 ) {
    // If the sessions have been populated by the get request and there are sessions for the selected study
      const sessions = studies[ selectedStudyInd ].sessions;
      return (
        <div className="sessions-sidebar">
          { sessions.map( ( session, i ) => {
            const duration = Math.floor( parseInt( session.duration ) / 1000 );
            const durationString = `${ duration } ${ duration === 1 ? 'second' : 'seconds' }`;
            return ( <Session
              { ...this.props }
              session={ session }
              durationString={ durationString }
              key={ i }
              i={ i }
              shortCode={ studies[ selectedStudyInd ].shortCode }
              selected={ this.props.sessionView.selected[ selectedStudy ] && this.props.sessionView.selected[ selectedStudy ].has( i ) }
            /> );
          }) }
        </div>
      );
    } else if ( studies[ selectedStudyInd ] === undefined || studies[ selectedStudyInd ].sessions.length === 0 ) {
      // If getCaseStudies has not yet run or there are no sessions for this study
      return <div>There are no sessions for this study</div>;
    }
  }
}

module.exports = SessionSidebar;
