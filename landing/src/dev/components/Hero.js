import React from 'react';
import queries from '../queries';

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
        message: 'Currently we only support urls (i.e. ending in .jpg, .png or .gif)',
      },
    ];
  }

  createLink() {
    const url = this.refs.url.value;
    const email = this.refs.email.value;
    const request = {
        ...queries.headers,
        ...queries.newUserStudy(url, email),
    };
    fetch('/api/graphql', request)
    .then(rawResponse => rawResponse.json())
    .then((json) => {
      const data = json.data;
      console.log('The response from the server', json);
      this.setState({ watchURL: (`${window.location.protocol}//app.${window.location.host}/watch/${data.newUserStudy.shortCode}`) });
    })
    .catch(error => console.log('Error in creating link', error));
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
        <h1>Find visual hotspots on your site</h1>
        <h2>Create a link to share with customers and track where they look</h2>
        <form className="tracknew" ref="new-study-form" onSubmit={this.handleSubmit.bind(this)} >
          <input onKeyUp={this.handleChange.bind(this)} ref="url" id="url" className="text-field" type="text" placeholder={'Website or image URL to visualise'} />
          {/*<FormFeedback field={this.state.url} validations={this.urlValidations} />*/}
          <input onKeyUp={this.handleChange.bind(this)} ref="email" id="email" className="text-field" type="text" placeholder={'Your email'} />
          <input type="submit" className={`button medium${this.state.hasCompletedForm ? '' : ' inactive'}`} />
          <div className={this.state.watchURL ? 'form-message' : 'hidden'}>
            <div className="text-box">{this.state.watchURL}</div>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Hero;
