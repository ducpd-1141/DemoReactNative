import { actionTypes } from '../actions/VenuesActions';

const INITIAL_STATE = {
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

const venuesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_VENUE_TIPS:
      return state;
    case actionTypes.INCREMENT:
      return incrementValue(state, action.payload);
    case actionTypes.DECREMENT:
      return decrementValue(state, action.payload);
    default:
      return state;
  }
};

export default venuesReducer;
