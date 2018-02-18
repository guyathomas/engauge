import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import accountStats from './accountStats';
import sessionView from './sessionView';
import studyList from './studyList';
import watch from './watch';

const rootReducer = combineReducers({ accountStats, sessionView, studyList, watch, routing: routerReducer });

export default rootReducer;
