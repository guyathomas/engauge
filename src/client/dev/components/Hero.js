import React from 'react';

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'Enter a ',
      email: '',
      hasCompletedForm: false,
    };
  }

  render() {
    return (
      <div className="hero">
        <div className="herotext main">Observe how your customers sees your product</div>
        <div className="herotext sub">Get started to see what your customers pay attention to on your website</div>
        <form className="tracknew">
          <input type="text" placeholder={'URL of image or website to be analysed'} />
          <input type="text" placeholder={'Email address that the history will be tied to'} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

module.exports = Hero;
