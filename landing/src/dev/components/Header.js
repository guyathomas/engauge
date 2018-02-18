import React from 'react';

const Header = props => (
  <nav className="header">
    <div className="logo">
      <a href="/">
        <img src="../images/brand.png" alt="engauge-logo" />
      </a>
    </div>
    <div className="button medium"><a href="https://app.engauge.xyz">Open App</a></div>
  </nav>
);

module.exports = Header;
