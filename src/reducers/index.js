import { combineReducers } from 'redux';
import mainReducer from './top/index';
import { venuesReducer } from './VenuesReducer';

// Root Reducer
const rootReducer = combineReducers({
  main: mainReducer,
  venues: venuesReducer,
});

export default rootReducer;
