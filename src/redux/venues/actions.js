export const actionTypes = {
  increment: 'increment',
  decrement: 'decrement',
  fetchRecommendVenues: 'fetchRecommendVenues',
  receivedRecommendVenues: 'receivedRecommendVenues',
};

// Input actions
const loadVenueTips = location => ({
  type: actionTypes.fetchRecommendVenues,
  payload: location,
});

// For demo saga
const increaseValue = step => ({
  type: actionTypes.increment,
  payload: step,
});

const decreaseValue = step => ({
  type: actionTypes.decrement,
  payload: step,
});

export const actionCreator = {
  loadVenueTips,
  increaseValue,
  decreaseValue,
};
