import React from 'react';
import LandingHeader from './LandingHeader';
import Hero from './Hero';

const Landing = props => (
  <div className="landing">
    <LandingHeader />
    <Hero createLink={props.route.createLink} />
  </div>
);

module.exports = Landing;
