import { LOAD_VENUE_TIPS, INCREMENT, DECREMENT } from '../actions/actionTypes';

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

export const venuesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_VENUE_TIPS:
      return state;
    case INCREMENT:
      return incrementValue(state, action.payload);
    case DECREMENT:
      return decrementValue(state, action.payload);
    default:
      return state;
  }
};
