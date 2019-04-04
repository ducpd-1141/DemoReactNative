// import { LOAD_VENUE_TIPS, INCREMENT, DECREMENT } from './actionTypes';

export const type = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  LOAD_VENUE_TIPS: 'LOAD_VENUE_TIPS',
};

export const loadVenueTips = location => ({
  type: type.LOAD_VENUE_TIPS,
  payload: location,
});

// For demo saga
export const increaseValue = step => ({
  type: type.INCREMENT,
  payload: step,
});

export const decreaseValue = step => ({
  type: type.DECREMENT,
  payload: step,
});
