import React from 'react';
import { Link } from 'react-router';
import HeaderLinks from './HeaderLinks';

const LandingHeader = props => (
  <div>
    <HeaderLinks location={'primary-nav'} />
    {props.children}
  </div>
);

module.exports = LandingHeader;
