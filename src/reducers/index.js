import { combineReducers } from 'redux';
import topReducer from './top';

// Root Reducer
const rootReducer = combineReducers({
  main: topReducer,
});

export default rootReducer;
