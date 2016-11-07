import React from 'react';
import { Link } from 'react-router';

const Header = (props) => (
  <nav id="primary-nav">
    <div className="logo">
      <Link to="/">
        <img src={'../../assets/images/brand.png'} />
      </Link>
    </div>
    <div className="button medium"><a href="http://www.engauge.com">Create Study</a></div>
  </nav>
);

module.exports = Header;
