import { combineReducers } from 'redux';
import mainReducer from './MainReducer';

// Root Reducer
const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
