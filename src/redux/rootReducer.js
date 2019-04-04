import { combineReducers } from 'redux';
import map from './map/reducer';
import venues from './venues/reducer';

const rootReducer = combineReducers({
  map,
  venues,
});

export default rootReducer;
