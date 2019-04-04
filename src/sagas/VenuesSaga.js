import { takeEvery, all } from 'redux-saga/effects';
// import { CLIENT_ID, CLIENT_SECRET } from '../constants/index';
import { DECREMENT, INCREMENT } from '../actions/actionTypes';

// export function* helloSaga() {
//   console.log('Hello Sagas!');
// }

// export function* requestVenueTips() {}

function increment() {
  console.log('This is increment saga');
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function decrement() {
  console.log('This is decrement saga');
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}

export default function* rootSaga() {
  yield all([watchDecrement(), watchIncrement()]);
}
