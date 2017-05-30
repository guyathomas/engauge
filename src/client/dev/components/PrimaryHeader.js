import React from 'react';
import HeaderLinks from './HeaderLinks';

const PrimaryHeader = props => (
  <div>
    <HeaderLinks location={'primary-nav'} />
    {props.children}
  </div>)


;

module.exports = PrimaryHeader;
