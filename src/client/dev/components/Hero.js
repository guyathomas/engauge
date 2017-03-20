import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      email: '',
      hasCompletedForm: false,
      watchURL: '',
    };
  }

  createLink() {
    const formFields = {
      email: this.state.email,
      url: this.state.url };

    fetch('/api/caseStudies', {
      method: 'post',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(formFields),
    })
    .then((response) => {
      console.log('The raw response is ', response, typeof response);
      return response.json();
    })
    .then((result) => {
      console.log('The shortCode is ', (window.location.href + 'watch/' + result.shortCode), result);
      this.setState({ watchURL: (window.location.href + 'watch/' + result.shortCode) }, () => {console.log('this.state.watchURL in app', this.state.watchURL)});
    });
  }

  // Update state to have key as the value of the field ID that was changed
  // and the value as the text input
  handleChange(e) {
    console.log();
    const stateObj = {};
    const field = e.target.id;
    stateObj[field] = e.target.value;
    this.setState(stateObj, () => {
      console.log(this.state);
      this.setState({
        hasCompletedForm: !!(this.state.url && this.state.email),
      });
    });
  }

  render() {
    console.log('this.props.watchURL', this.state.watchURL);
    return (
      <div className="hero">
        <div className="herotext-parent">
          <div className="herotext main">Observe how your customers see your product</div>
          <div className="herotext sub">Get started to see what your customers pay attention to on your website</div>
        </div>
        <form className="tracknew">
          <input onKeyUp={this.handleChange.bind(this)} id="url" className="input"type="text" placeholder={'URL to track'} />
          <input onKeyUp={this.handleChange.bind(this)} id="email" className="input" type="text" placeholder={'Your email'} />
          <div className={this.state.hasCompletedForm ? 'button-cta' : 'button-cta inactive'} onClick={this.createLink.bind(this, this.state.url, this.state.email)}>Generate Link</div>
          <div className={this.state.watchURL ? 'copy-container' : 'hidden'}>
            {/*<div className="button-cta copy">Copy</div>*/}
            <div className="copy-text">{this.state.watchURL}</div>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Hero;
