import React from 'react';
import { Link } from 'react-router';

const Header = (props) => (
  <nav id="primary-nav">
    <div className="logo">
      <Link to="/">
        <img src={'../../assets/images/brand.png'} />
      </Link>
    </div>
    <div className="button medium">Sign Up</div>
    <div className="button medium">Create Study</div>
    <div className="hamburger">=</div>
  </nav>
);

module.exports = Header;
