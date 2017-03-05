import React from 'react';
import { Link } from 'react-router';


const Links = () => (
  <nav className="primary-nav">
    <div><Link to="/">Home</Link></div>
    <div><Link to="/watch">Watch</Link></div>
    <div><Link to="/review">Review</Link></div>
  </nav>
  );

class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: '0',
    };
  }

  render() {
    return (
      <div>
        <Links />
        {this.props.children}
      </div>
    );
  }
}

module.exports = LandingHeader;
