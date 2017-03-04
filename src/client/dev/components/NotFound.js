import React from 'react';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: '',
    };
  }


  render() {
  	console.log(props)
    return (
		<div>Not Found</div>
    );
  }
}

module.exports = NotFound;
