import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Landing from './components/Landing';
import Watch from './components/Watch';
import Blog from './components/Blog';
import Review from './components/Review';
import NotFound from './components/NotFound';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Landing} />
    <Route path="/watch" component={Watch} >
      <Route path=":itemID" component={Watch} />
    </Route>
    <Route path="/review" component={Review} >
      <Route path=":itemID(/:caseID)" component={Review} />
    </Route>
    <Route path="blog" component={Blog} />
    <Route path="*" component={NotFound} />
  </Router>
	, document.getElementById('app'));
