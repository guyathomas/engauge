import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

// Import css
// import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Watch from './components/Watch';
import Review from './components/Review';
import ReviewSidebar from './components/ReviewSidebar';
import NotFound from './components/NotFound';
// import PrimaryHeader from './components/PrimaryHeader';
import CSList from './components/CSList';

import store, { history } from './store';

const WatchList = () => (<CSList action="watch" />);
const ReviewList = () => (<CSList action="review" />);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/watch/:shortCode" component={Watch} />
        <Route path="/watch" component={WatchList} />
        <Route path="/review" component={ReviewList} />
        <Route path="/review/:shortCode" component={ReviewSidebar} >
          <Route path="/review/:shortCode/:sessionID" component={Review} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
