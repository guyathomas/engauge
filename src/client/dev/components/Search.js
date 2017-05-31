import React from 'react';

const Search = (props) => (
	<input ref="url" className="search" type="text" placeholder={'Search'} onKeyUp={(e)=>{console.log('Searched for', e.target.value)}}/>
)

export default Search;