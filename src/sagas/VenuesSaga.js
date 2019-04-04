import { takeEvery } from 'redux-saga/effects';
// import { CLIENT_ID, CLIENT_SECRET } from '../constants/index';
import { actionTypes } from '../actions/VenuesActions';

function increment() {
  console.log('This is increment saga');
}

function decrement() {
  console.log('This is decrement saga');
}

const venuesSaga = [
  takeEvery(actionTypes.INCREMENT, increment),
  takeEvery(actionTypes.DECREMENT, decrement),
];

export default venuesSaga;
