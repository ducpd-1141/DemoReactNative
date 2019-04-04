import { takeEvery, all, takeLatest } from 'redux-saga/effects';
// import { CLIENT_ID, CLIENT_SECRET } from '../constants/index';
import { actionTypes } from './actions';

function increment() {
  console.log('This is increment saga');
}

function decrement() {
  console.log('This is decrement saga');
}

// const venuesSaga = [
//   takeEvery(actionTypes.INCREMENT, increment),
//   takeEvery(actionTypes.DECREMENT, decrement),
// ];

export default function* VenuesWatcher() {
  yield all(
    [takeLatest(actionTypes.INCREMENT, increment)],
    [takeLatest(actionTypes.DECREMENT, decrement)],
  );
}
