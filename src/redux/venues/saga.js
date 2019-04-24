import { takeEvery, call, put } from 'redux-saga/effects';
import { actionTypes } from './actions';
import api from '../../network';
import { getApiPath } from '../../constants';

function increment() {
  console.log('This is increment saga');
}

function decrement() {
  console.log('This is decrement saga');
}

function* fetchRecommendVenues(action) {
  try {
    const json = yield call(
      api.get,
      getApiPath(`venues/explore?ll=${action.payload.lat},${action.payload.lng}&limit=5`),
    );
    const { meta, response } = json.data;
    if (meta && meta.code === 200) {
      yield put({ type: actionTypes.receivedRecommendVenues, response });
    }
  } catch (error) {
    console.log(error);
  }
}

const venuesSaga = [
  takeEvery(actionTypes.increment, increment),
  takeEvery(actionTypes.decrement, decrement),
  takeEvery(actionTypes.fetchRecommendVenues, fetchRecommendVenues),
];

export default venuesSaga;
