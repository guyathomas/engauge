import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './Landing';
import Watch from './Watch';
import Blog from './Blog';
import Review from './Review';
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

    fetch('/api/link', {
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
    .then((shortURL) => {
      console.log('The shortURL is ', shortURL);
      this.setState({ shortURL });
    });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing} createLink={this.createLink} />
        <Route path="/watch" component={Watch} >
          <Route path=":itemID" component={Watch} />
        </Route>
        <Route path="/review" component={Review} >
          <Route path=":itemID(/:caseID)" component={Review} />
        </Route>
        <Route path="blog" component={Blog} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

module.exports = App;
