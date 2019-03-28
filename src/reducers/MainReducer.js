import { SELECTED_CATEGORY, UNSELECTED_CATEGORY } from "../actions/actionTypes"

const initialState = {
  categorySelected: "",
};

export default function mainReducer(state = initialState, action) {
  // Log the initial state
  switch (action.type) {
    case SELECTED_CATEGORY:
        return { ...state, categorySelected: action.value};
    case UNSELECTED_CATEGORY:
      return { ...state, categorySelected: action.value};
    default:
      return state
  }
}
