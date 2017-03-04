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
    .then((response) => {
      console.log('The raw response from the getSessions is ', response);
      return response.json();
    })
    .then((sessions) => {
      this.setState({ sessions: sessions.data });
    });
  }

  componentDidMount() {
    const shortCode = this.state.shortCode;
    this.getSessions(shortCode);
  }

  render() {
    const sessions = this.state.sessions;
    console.log('The sessions', sessions);
    return (
      <div className="sessions">
        {sessions.map((item) => (<div>{item.socketID}</div>))}
      </div>
    );
  }
}

module.exports = ReviewList;
