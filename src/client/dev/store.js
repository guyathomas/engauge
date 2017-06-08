import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

// import comments from './data/comments';
// import posts from './data/posts';

const defaultState = {
  accountStats: {
    expanded: true,
  },
  sessionView: {
    activeTab: 1,
    heatmap: '',
    selectedSessions: new Set([0]),
  },
  studyList: {
    filters: {
      searchQuery: '',
      showAll: true,
    },
    studies: [],
    selectedStudy: 0,
  },
  watch: {
    game: {
      loc: { leftPerc: 0.50, topPerc: 0.50 },
      windowSize: { height: window.innerHeight, width: window.innerWidth },
      circle: { r: 40 },
      targetGames: 2,
      currGame: 1,
    },
    newSession: [],
  },
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
