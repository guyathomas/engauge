import React from 'react';
import { Link } from 'react-router';


const Links = () => (
  <nav className="primary-nav">
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
    <div>Register</div>
    <div>Login</div>
  </nav>
  );

const Header = () => (
  <div className="header">
    <Links />
  </div>
  );

module.exports = Header;
