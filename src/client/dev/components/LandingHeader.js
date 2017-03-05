import React from 'react';
import { Link } from 'react-router';


const Links = () => (
  <nav className="landing-nav">
    <div><Link to="/">Home</Link></div>
    <div><Link to="/watch">Watch</Link></div>
    <div><Link to="/review">Review</Link></div>
  </nav>
  );

const LandingHeader = () => (
  <div>
    <Links />
  </div>
  );

module.exports = LandingHeader;
