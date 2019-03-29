import { SELECTED_CATEGORY, UNSELECTED_CATEGORY } from "../actions/actionTypes"

const initialState = {
  title: "hotel"
}

export default function mainReducer(state = initialState, action) {
  console.warn(action)
  // Log the initial state

  switch (action.type) {
    case SELECTED_CATEGORY:
      return { ...state, title: action.category }
    case UNSELECTED_CATEGORY:
      return { ...state, title: action.category }

    default:
      return state
  }
}
