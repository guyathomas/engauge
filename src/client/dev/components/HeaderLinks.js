import React from 'react';
import { Link } from 'react-router';

const HeaderLinks = (props) => (
  <nav className={props.location}>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/watch">Watch</Link></div>
    <div><Link to="/review">Review</Link></div>
  </nav>
);

module.exports = HeaderLinks;
