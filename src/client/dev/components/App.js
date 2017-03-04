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
      dummy: '',
    };
  }

  createLink(urlInput, emailInput) {
    console.log('urlInput', urlInput, 'emailInput', emailInput);
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
      return response;
    })
    .then((shortCode) => {
      console.log('The shortCode is ', shortCode);
      this.setState({ shortCode });
    });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing} createLink={this.createLink} />
        <Route path="/watch/:shortCode" component={Watch} />
        <Route path="/review/:shortCode" component={ReviewList} >
          <Route path=":caseID" component={Review} />
        </Route>
        <Route path="blog" component={Blog} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

module.exports = App;
