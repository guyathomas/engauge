import React from 'react';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      email: '',
      hasCompletedForm: false,
    };
  }

  render() {
    return (
      <div className="hero">
        <div className="herotext-parent">
          <div className="herotext main">Observe how your customers sees your product</div>
          <div className="herotext sub">Get started to see what your customers pay attention to on your website</div>
        </div>
        <form className="tracknew">
          <input className="input"type="text" placeholder={'URL to track'} />
          <input className="input" type="text" placeholder={'Your email'} />
          <div className="button-cta inactive">Generate Link</div>
          <div className="button-cta">Generate Link</div>
          <div className="copy-container">
            <div className="button-cta copy">Copy</div>
            <div className="copy-text">engauge.com/xyz</div>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Hero;
