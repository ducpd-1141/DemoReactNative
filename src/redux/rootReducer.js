import { combineReducers } from 'redux';
import map from './map/reducer';
import venues from './venues/reducer';
import top from './top/reducer';

const rootReducer = combineReducers({
  map,
  venues,
  top,
});

export default rootReducer;
