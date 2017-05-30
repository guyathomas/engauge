import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import watch from './watch';
import review from './review';
import studies from './studies';
import sessions from './sessions';


const rootReducer = combineReducers({ watch, review, studies, sessions, routing: routerReducer });

export default rootReducer;
