import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './Landing';
import Watch from './Watch';
import Review from './Review';
import ReviewSidebar from './ReviewSidebar';
import WatchList from './WatchList';
import NotFound from './NotFound';
import PrimaryHeader from './PrimaryHeader';
import ReviewList from './ReviewList';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route component={PrimaryHeader}>
      <Route path="/watch/:shortCode" component={Watch} />
      <Route path="/watch" component={WatchList} title={'Watch List'} />
      <Route path="/review" component={ReviewList} />
      <Route path="/review/:shortCode" component={ReviewSidebar} >
        <Route path="/review/:shortCode/:sessionID" component={Review} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

module.exports = App;
