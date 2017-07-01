import React from 'react';
import Header from './molecules/Header';
import './Main.styl';

const Main = props => (
  <div>
    <Header {...props}/>
    {React.cloneElement(props.children, { ...props }) }
    {/* Clone element can cause duplicate components that are deeply nested in the router*/}
  </div>

);

export default Main;
