import React from 'react';
import Header from './Header';


const Main = props => (
  <div>
    <Header />
    {props.children}
  </div>

);

export default Main;
