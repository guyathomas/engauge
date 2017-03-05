import React from 'react';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: '',
    };
  }


  render() {
  	console.log(this.props)
    return (
      <div>
    		<div>Not Found</div>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    );
  }
}

module.exports = NotFound;
