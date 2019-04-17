import { all } from 'redux-saga/effects';
import map from './map/saga';
import venuesSaga from './venues/saga';
import top from './top/saga';

export default function* rootSaga() {
  yield all([...map, ...venuesSaga, ...top]);
}
