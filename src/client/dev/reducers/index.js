import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import watch from './watch';
import review from './review';
import studies from './studies';


const rootReducer = combineReducers({ watch, review, studies, routing: routerReducer });

export default rootReducer;
