import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

// Import css
// import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Watch from './components/Watch';
import Dash from './components/Dash';
import NotFound from './components/NotFound';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/watch/:shortCode" component={Watch} />
        <Route path="/dash(/:shortCode)(/:sessionView)" component={Dash} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
