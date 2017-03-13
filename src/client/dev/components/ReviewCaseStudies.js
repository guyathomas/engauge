import React from 'react';

class ReviewCaseStudies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseStudies: [],
    };
  }

  getSessions() {
    fetch('/api/sessions', {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((caseStudies) => {
      this.setState({ caseStudies: caseStudies.data });
    });
  }

  componentDidMount() {
    // this.getcaseStudies();
  }

  render() {
    return (
      <div className="casestudies">
      casestudies
      </div>
    );
  }
}

module.exports = ReviewCaseStudies;
