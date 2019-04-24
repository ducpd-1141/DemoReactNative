import {
  put, call, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { actionCreator, types } from './actions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* searchAll() {
  // console.warn('searchAll---');
  // // return payload;
  // yield delay(20);
  // yield put(actionCreator.searchAll());
}
function searchForCategory(action) {
}
const categoryWatcher = [
  takeLatest(types.searchAll, searchAll),
  takeLatest(types.searchForCategory, searchForCategory),
];

export default categoryWatcher;
