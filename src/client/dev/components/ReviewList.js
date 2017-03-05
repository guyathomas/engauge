import React from 'react';
import { Link } from 'react-router';

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
    const url = this.props.location.pathname;
    console.log('The sessions', sessions);
    console.log('props', this.props)
    console.log(this.props.params.shortCode + "/" + 'item.id')
    return (
      <div className="sessions-list">
        {sessions.map(item => (<li key={item.id} ><Link to={`/review/${this.props.params.shortCode}/${item.socketID}`}>{item.socketID}</Link></li>))}
        {this.props.children}
      </div>
    );
  }
}

module.exports = ReviewList;
