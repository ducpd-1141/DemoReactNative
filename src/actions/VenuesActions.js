// import { LOAD_VENUE_TIPS, INCREMENT, DECREMENT } from './actionTypes';

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  LOAD_VENUE_TIPS: 'LOAD_VENUE_TIPS',
};

export const loadVenueTips = location => ({
  type: actionTypes.LOAD_VENUE_TIPS,
  payload: location,
});

// For demo saga
export const increaseValue = step => ({
  type: actionTypes.INCREMENT,
  payload: step,
});

export const decreaseValue = step => ({
  type: actionTypes.DECREMENT,
  payload: step,
});
