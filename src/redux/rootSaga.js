import { all } from 'redux-saga/effects';
import map from './map/sagas';

export default function* rootSaga() {
  yield all([
    map(),
  ]);
}
