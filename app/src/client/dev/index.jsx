import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

// Fetch Polyfill
import 'whatwg-fetch';

// Import Components
import App from './components/App';
import Watch from './components/pages/Watch';
import Dash from './components/pages/Dash';
import NotFound from './components/NotFound';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      	<IndexRedirect to="/dash" />
        <Route path="/watch/:shortCode" component={Watch} />
        <Route path="/dash(/:shortCode)(/:sessionView)" component={Dash} />
        <Route path="/*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
