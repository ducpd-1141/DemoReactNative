import { all } from 'redux-saga/effects';
import map from './map/saga';
import venues from './venues/saga';

export default function* rootSaga() {
  yield all([
    map(),
    venues(),
  ]);
}
