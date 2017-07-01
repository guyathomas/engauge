import React from 'react';
import { Link } from 'react-router';

import './Header.styl';

const Header = (props) => (
  <nav className={"primary-nav"}>
    <div className="logo">
      <Link to="/">
        <img src={'../../assets/images/brand.png'} />
      </Link>
    </div>
    <div className="first-item button">Sign Up</div>
    <div className="button">Create Study</div>
    <div className="hamburger">=</div>
  </nav>
);

module.exports = Header;
