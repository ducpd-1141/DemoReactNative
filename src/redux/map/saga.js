import {
  put, call, takeLatest, all,
} from 'redux-saga/effects';
import api from '../../network';
import { getApiPath } from '../../constants';
import { actionCreator, types } from './actions';

function* searchVenue(payload) {
  try {
    const response = yield call(api.get, getApiPath(`venues/search?ll=${payload.lat},${payload.lng}`));
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
    yield put(actionCreator.fetchingSuccess({ venues }));
  } catch (error) {
    console.log(error);
    yield put(actionCreator.fetchingError({ error }));
  }
}

const searchVenueWatcher = [
  takeLatest(types.fetching, searchVenueSaga),
];

export default searchVenueWatcher;
