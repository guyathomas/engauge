import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
    static propTypes = {
      isOn: PropTypes.bool,
    };

    static defaultProps = {
      isOn: false,
    };

    constructor( props ) {
      super( props );
      this.state = { isOn: props.isOn };
    }

  toggleActive = () => this.setState({ isOn: !this.state.isOn });

  render() {
    return (
      <button className="toggle" onClick={ this.toggleActive } />
    );
  }
}

export default Toggle;
