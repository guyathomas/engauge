import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './core/reducers/rootReducer';

const defaultState = {
  dash: {},
  watch: {},
};

const enhancers = compose( window.devToolsExtension ? window.devToolsExtension() : f => f );

const store = createStore( rootReducer, defaultState, enhancers );

export const history = syncHistoryWithStore( browserHistory, store );

if ( module.hot ) {
  module.hot.accept( './components/environments/**/', () => {
    const nextRootReducer = require( './core/reducers/rootReducer' ).default;
    store.replaceReducer( nextRootReducer );
  });
}

export default store;
