import { types } from './actions';

const initialState = {
  venues: [],
};

const reducer = (state = initialState, action) => {
  // Log the initial state
  switch (action.type) {
    case types.receivedVenues:
      return { ...state, venues: action.response.group.results };
    case types.searchForCategory:
      return { ...state, category: action.category };
    case types.clear:
      return { ...state, venues: [] };
    default:
      return state;
  }
};

export default reducer;
