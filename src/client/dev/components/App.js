import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './Landing';
import Watch from './Watch';
import Review from './Review';
import ReviewSessions from './ReviewSessions';
import WatchList from './WatchList';
import NotFound from './NotFound';
import PrimaryHeader from './PrimaryHeader';
import ReviewList from './ReviewList';

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
        <Route path="/" component={Landing} createLink={this.createLink} />
        <Route component={PrimaryHeader}>
          <Route path="/watch/:shortCode" component={Watch} />
          <Route path="/watch" component={WatchList} />
          <Route path="/review" component={ReviewList} />
          <Route path="/review/:shortCode" component={ReviewSessions} >
            <Route path="/review/:shortCode/:sessionID" component={Review} />
          </Route>
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

module.exports = App;
