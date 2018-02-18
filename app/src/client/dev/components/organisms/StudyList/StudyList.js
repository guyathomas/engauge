import React from 'react';
import queries from 'queries';
import StudyCard from 'components/molecules/StudyCard';

class StudyList extends React.Component {
  constructor( props ) {
    super( props );
  }

  componentWillMount() {
    this.getStudies();
  }

  getStudies() {
    fetch( '/graphql', {
      ...queries.headers,
      ...queries.getStudies,
    })
      .then( response => response.json() )
      .then( ({ data, errors }) => {
        if ( errors ) { throw new Error( 'Error in response from graphql server', errors ); }
        return this.props.updateStudies( data.studies );
      })
      .then( ({ studies }) => {
      // Set active study to the first in the list
        this.props.selectStudy( studies[ 0 ].shortCode );
      })
      .catch( err => console.log( err ) );
  }

  render() {
    return (
      <div className="studies-container">
        { this.props.studyList.studies.map( ( study, i ) => (
          <StudyCard
            selected={ study.shortCode === this.props.studyList.selectedStudy }
            key={ study.id }
            study={ study }
            selectStudy={ this.props.selectStudy.bind( this, study.shortCode )
          }
          />
        ) ) }
      </div>
    );
  }
}

export default StudyList;
