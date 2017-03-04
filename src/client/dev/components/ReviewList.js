import React from 'react';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      shortCode: this.props.params.shortCode,
    };
  }

  getSessions(shortCode) {
    fetch(`/api/sessions/${shortCode}`, {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((sessions) => {
      this.setState({ sessions });
    });
  }

  componentDidMount() {
    const shortCode = this.state.shortCode;
    this.getSessions(shortCode);
  }

  render() {
    const sessions = this.state.sessions;
    const url = window.location.pathname;
    console.log('The sessions', sessions);
    return (
      <div className="sessions-list">
        {sessions.map(item => (<a href={`${url}/${item.socketID}`}><div>{item.socketID}</div></a>))}
      </div>
    );
  }
}

module.exports = ReviewList;
