import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCompletedForm: false,
      watchURL: '',
      url: '',
      email: '',
    };
  }


  componentWillMount() {
    this.urlValidations = [
      {
        condition: fieldText => fieldText.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i),
        message: 'This Dev version of the app requires an image URL input.',
      },
    ];
  }

  createLink() {
    const url = this.refs.url.value;
    const email = this.refs.email.value;

    fetch('/graphql', {
      ...queries.headers,
      ...queries.newUserStudy(url, email),
    })
    .then(rawResponse => rawResponse.json())
    .then(({ data }) => {
      this.setState({ watchURL: (`${window.location.href}watch/${data.newUserStudy.shortCode}`) });
    })
    .catch((error) => console.log('Error in creating link', error));
  }


  handleSubmit(event) {
    event.preventDefault();
    this.createLink();
  }

  handleChange() {
    const newState = {
      url: this.refs.url.value,
      email: this.refs.email.value,
    };
    this.setState(newState, () => {
      this.setState({
        hasCompletedForm: !!(this.state.url && this.state.email),
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
        <form className="tracknew" ref="new-study-form" onSubmit={this.handleSubmit.bind(this)} >
          <input onKeyUp={this.handleChange.bind(this)} ref="url" id="url" className="input"type="text" placeholder={'URL to track'} />
          <FormFeedback field={this.state.url} validations={this.urlValidations} />
          <input onKeyUp={this.handleChange.bind(this)} ref="email" id="email" className="input" type="text" placeholder={'Your email'} />
          <input type="submit" className={this.state.hasCompletedForm ? 'button-cta' : 'button-cta inactive'} />
          <div className={this.state.watchURL ? 'form-message' : 'hidden'}>
            <div className="text-box">{this.state.watchURL}</div>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Hero;
