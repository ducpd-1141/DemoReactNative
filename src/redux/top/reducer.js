import { types } from './actions';

const initialState = {
  categorySelected: null,
};

const reducer = (state = initialState, action) => {
  // Log the initial state
  switch (action.type) {
    case types.searchAll:
      return { ...state, categorySelected: 123 };
    case types.searchForCategory:
      return { ...state, categorySelected: action.payload };
    default:
      return state;
  }
};

export default reducer;
