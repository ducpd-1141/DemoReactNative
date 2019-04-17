import { types } from './actions';

const initialState = {
  categorySelected: '',
};

const reducer = (state = initialState, action) => {
  // Log the initial state
  switch (action.type) {
    case types.searchAll:
      console.warn('search all');
      return { ...state, categorySelected: 123 };
    case types.searchForCategory:
      console.warn('searchForCategory2');

      return { ...state, categorySelected: action.payload };
    default:
      return state;
  }
};

export default reducer;
