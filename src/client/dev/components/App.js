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

  createLink(url, email) {
    console.log( url, email );
    console.log({ url, email });

    fetch('/api/link', {
      method: 'post',
      body: JSON.stringify({
        email,
        url,
      }),
    })
    .then((response) => {
      console.log('The raw response is ', response);
      return response.json();
    })
    .then((shortURL) => {
      this.setState({ shortURL });
      console.log('The shortURL is ', shortURL);
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
