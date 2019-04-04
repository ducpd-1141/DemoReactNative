import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import api from '../../network';
import { KEY_API } from '../../constants';
import { fetchingSuccess, fetchingError, types } from './actions';

function* searchVenue(payload) {
  try {
    const response = yield yield call(api.get, `venues/search?ll=${payload.lat},${payload.lng}&${KEY_API}`);
    console.log('response: ', response);
    if (response && response.status === 200) {
      return response.data.response.venues;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}


function* searchVenueSaga(action) {
  console.log('searchVenue', action);
  try {
    const venues = yield call(searchVenue, (action.payload));
    console.log('venues: ', venues);
    yield put(fetchingSuccess({ venues }));
  } catch (error) {
    console.log(error);
    yield put(fetchingError({}));
  }
}

export default function* searchVenueWatcher() {
  yield all([takeLatest(types.fetching, searchVenueSaga)]);
}
