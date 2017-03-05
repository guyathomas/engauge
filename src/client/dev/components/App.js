import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './Landing';
import Watch from './Watch';
import Blog from './Blog';
import Review from './Review';
import ReviewList from './ReviewList';
import NotFound from './NotFound';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      watchURL: '',
    };
  }

  createLink(urlInput, emailInput) {
    const formFields = {
      email: emailInput,
      url: urlInput };

    fetch('/api/caseStudy', {
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

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing} createLink={this.createLink} watchURL={this.state.watchURL} />
        <Route path="/watch/:shortCode" component={Watch} />
        <Route path="/review/:shortCode" component={ReviewList} >
          <Route path="/review/:shortCode/:caseID" component={Review} />
        </Route>
        <Route path="blog" component={Blog} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

module.exports = App;
