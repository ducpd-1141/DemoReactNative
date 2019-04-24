import { combineReducers } from 'redux';
import map from './map/reducer';
import venues from './venues/reducer';
import top from './top/reducer';
import search from './search/reducer';

const rootReducer = combineReducers({
  map,
  venues,
  top,
  search,
});

export default rootReducer;
