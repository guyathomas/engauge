import React from 'react';
import { Link } from 'react-router';

const Logo = (location) => {
  if (location === 'landing-nav') {
    return (<div className="hidden"/>);
  } else {
    return (
    <div className="logo">
      <Link to="/">
        <img src={'../../assets/images/brand.png'} />
      </Link>
    </div>);
  }
};

const HeaderLinks = props => (
  <nav className={props.location}>
    {Logo(props.location)}
    <div className="first-item"><Link to="/watch">Watch</Link></div>
    <div><Link to="/review">Review</Link></div>
  </nav>
);

module.exports = HeaderLinks;
