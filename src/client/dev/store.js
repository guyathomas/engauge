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
    selected: {
      shortcodeHere: new Set(),
    },
    heatData: [],
    defaultDataSize: { x: 1920, y: 1080 },
  },
  studyList: {
    filters: {
      searchQuery: '',
      showAll: true,
    },
    studies: [],
    selectedStudy: '',
  },
  watch: {
    activeStudy: {},
    game: {
      loc: { leftPerc: 0.50, topPerc: 0.50 },
      circle: { r: 40 },
      targetGames: 5,
      currGame: 1,
    },
    newSession: [],
    metaData: {},
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
