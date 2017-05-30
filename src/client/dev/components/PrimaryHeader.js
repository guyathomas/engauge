import React from 'react';
import HeaderLinks from './HeaderLinks';

const PrimaryHeader = (props) => {
  console.log('props', props);
  return (
    <div>
      <HeaderLinks location={'primary-nav'} />
      {React.cloneElement(props.children, { ...props })}
    </div>
  );
}


;

module.exports = PrimaryHeader;
