import React from 'react';
import Header from './Header';
import Hero from './Hero';

const Landing = props => (
  <div className="landing">
    <Header />
    <Hero createLink={props.route.createLink} />
  </div>
);

module.exports = Landing;
