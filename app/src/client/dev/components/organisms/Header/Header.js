import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav id="primary-nav">
        <div className="logo">
          <Link to="/">
            <img src="/../assets/images/brand.png" alt="brand-iamge" />
          </Link>
        </div>
        <div className="button medium"><a href="https://www.engauge.xyz/">Create Study</a></div>
      </nav>
    );
  }
}

module.exports = Header;
