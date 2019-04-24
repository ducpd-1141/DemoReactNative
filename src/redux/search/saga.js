import {
  put, call, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { actionCreator, types } from './actions';
import api from '../../network';
import { getApiPath } from '../../constants';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* searchForCategory(action) {
  try {
    yield delay(500);
    const json = yield call(
      api.get,
      getApiPath(
        `search/recommendations?ll=${action.payload.lat},${action.payload.lng}&query=${
          action.payload.query
        }&limit=30`,
      ),
    );
    const { meta, response } = json.data;
    if (meta && meta.code === 200) {
      yield put({ type: types.receivedVenues, response });
    }
  } catch (error) {
    console.log(error);
  }
}
const categoryWatcher = [
  takeLatest(types.searchForCategory, searchForCategory),
  // takeLatest(types.receivedVenues, searchForCategory),
];

export default categoryWatcher;
