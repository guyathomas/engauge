import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formUrl: '',
      formEmail: '',
      hasCompletedForm: false,
      watchURL: '',
    };
  }

  createLink() {
    const formFields = {
      formEmail: this.state.formEmail,
      formUrl: this.state.formUrl };
    fetch('/api/caseStudies', {
      method: 'post',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(formFields),
    })
    .then(response => response.json())
    .then((result) => {
      this.setState({ watchURL: (window.location.href + 'watch/' + result.shortCode) });
    });
  }

  // Update state to have key as the value of the field ID that was changed
  // and the value as the text input
  handleChange(e) {
    const stateObj = {};
    const field = e.target.id;
    stateObj[field] = e.target.value;
    this.setState(stateObj, () => {
      this.setState({
        hasCompletedForm: !!(this.state.formUrl && this.state.formEmail),
      });
    });
  }

  render() {
    return (
      <div className="hero">
        <div className="herotext-parent">
          <div className="herotext main">Observe how your customers see your product</div>
          <div className="herotext sub">Get started to see what your customers pay attention to on your website</div>
        </div>
        <form className="tracknew">
          <input onKeyUp={this.handleChange.bind(this)} id="formUrl" className="input"type="text" placeholder={'URL to track'} />
          <input onKeyUp={this.handleChange.bind(this)} id="formEmail" className="input" type="text" placeholder={'Your email'} />
          <div className={this.state.hasCompletedForm ? 'button-cta' : 'button-cta inactive'} onClick={this.createLink.bind(this, this.state.url, this.state.email)}>Generate Link</div>
          <div className={this.state.watchURL ? 'copy-container' : 'hidden'}>
            <div className="copy-text">{this.state.watchURL}</div>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Hero;
