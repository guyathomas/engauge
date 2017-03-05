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
