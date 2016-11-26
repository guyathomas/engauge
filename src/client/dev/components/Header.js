import React from 'react';
import { Link } from 'react-router';


const Links = () => (
  <nav className="primary-nav">
    <div><Link to="/">Home</Link></div>
    <div><Link to="/blog">Blog</Link></div>
    <div>Register</div>
    <div className="navitem-special"><span>Login</span></div>
  </nav>
  );

const Header = () => (
  <div className="header">
    <Links />
  </div>
  );

module.exports = Header;
