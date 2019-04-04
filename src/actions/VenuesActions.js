export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  LOAD_VENUE_TIPS: 'LOAD_VENUE_TIPS',
};

const loadVenueTips = location => ({
  type: actionTypes.LOAD_VENUE_TIPS,
  payload: location,
});

// For demo saga
const increaseValue = step => ({
  type: actionTypes.INCREMENT,
  payload: step,
});

const decreaseValue = step => ({
  type: actionTypes.DECREMENT,
  payload: step,
});

export const actionCreator = {
  loadVenueTips,
  increaseValue,
  decreaseValue,
};
