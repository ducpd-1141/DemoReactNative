import { actionTypes } from './actions';

const initialState = {
  time: 0,
};

function incrementValue(state, step) {
  let { time } = state;
  time += step;
  return { time };
}

function decrementValue(state, step) {
  let { time } = state;
  time -= step;
  return { time };
}

const venuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchRecommendVenues:
      return { ...state, isLoading: true };
    case actionTypes.increment:
      return incrementValue(state, action.payload);
    case actionTypes.decrement:
      return decrementValue(state, action.payload);
    case actionTypes.receivedRecommendVenues:
      return {
        ...state,
        isLoading: false,
        recommendPlaces: action.response.groups[0].items,
      };
    default:
      return state;
  }
};

export default venuesReducer;
