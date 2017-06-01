import React from 'react';

import Toggler from './Toggler';
import Search from './Search';

const Filters = props => (
  <div className="filter-container">
    <div className="filters">
      <Search />
      <Toggler />
    </div>
    <div className="results">
       {`${props.studyCount} ${(props.studyCount === 1 ? 'study' : 'studies')} found`}
    </div>
  </div>
);

export default Filters;
