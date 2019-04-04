import { types } from './actions';

const initialState = {
  categorySelected: '',
};

export default function reducer(state = initialState, action) {
  // Log the initial state
  switch (action.type) {
    case types.SELECTED_CATEGORY:
      return { ...state, categorySelected: action.category };
    case types.UNSELECTED_CATEGORY:
      return { ...state, categorySelected: action.category };
    default:
      return state;
  }
}
