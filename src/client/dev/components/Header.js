import React from 'react';
import { Link } from 'react-router';


const Links = () => (
  <nav className="primary-nav">
    <div><Link to="/">Home</Link></div>
    <div><Link to="/watch">Watch</Link></div>
    <div><Link to="/review">Review</Link></div>
  </nav>
  );

const Header = () => (
  <div className="header">
    <Links />
  </div>
  );

module.exports = Header;
