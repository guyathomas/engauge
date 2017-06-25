import React from 'react';
import { Link } from 'react-router';
import HeaderLinks from './HeaderLinks';


const LandingHeader = () => (
  <div>
    <HeaderLinks location={'landing-nav'} />
  </div>
  );

module.exports = LandingHeader;
