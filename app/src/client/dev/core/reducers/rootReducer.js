import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dash from 'components/environments/Dash/reducer';
import watch from 'components/environments/Watch/reducer';

const rootReducer = combineReducers({ dash, watch, routing: routerReducer });

export default rootReducer;
