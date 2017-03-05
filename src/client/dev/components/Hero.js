import React from 'react';

const _ = require('lodash');

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      email: '',
      hasCompletedForm: false,
    };
  }

  // Update state by a specific target value
  handleChange(e, target) {
    const stateObj = {};
    stateObj[target] = e.target.value;
    this.setState(stateObj, () => {
      console.log(this.state);
      this.setState({
        hasCompletedForm: !!(this.state.url && this.state.email),
      });
    });
  }

  render() {
    console.log('this.props.watchURL', this.props.watchURL)
    return (
      <div className="hero">
        <div className="herotext-parent">
          <div className="herotext main">Observe how your customers see your product</div>
          <div className="herotext sub">Get started to see what your customers pay attention to on your website</div>
        </div>
        <form className="tracknew">
          <input onKeyUp={_.bind(this.handleChange, this, _, 'url')} id="url" className="input"type="text" placeholder={'URL to track'} />
          <input onKeyUp={_.bind(this.handleChange, this, _, 'email')} id="email" className="input" type="text" placeholder={'Your email'} />
          <div className={this.state.hasCompletedForm ? 'button-cta' : 'button-cta inactive'} onClick={this.props.createLink.bind(this, this.state.url, this.state.email)}>Generate Link</div>
          <div className={this.props.watchURL ? 'copy-container' : 'hidden'}>
            <div className="button-cta copy">Copy</div>
            <div className="copy-text">{this.props.watchURL}</div>
          </div>
        </form>
      </div>
    );
  }
}

Hero.propTypes = { createLink: React.PropTypes.function };

module.exports = Hero;
