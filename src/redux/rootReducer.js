import { combineReducers } from 'redux';
import map from './map/reducer';

const rootReducer = combineReducers({
  map,
});

export default rootReducer;
