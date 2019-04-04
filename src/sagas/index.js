import { all } from 'redux-saga/effects';
import venuesSaga from './VenuesSaga';

export default function* rootSaga() {
  yield all([...venuesSaga]);
}
