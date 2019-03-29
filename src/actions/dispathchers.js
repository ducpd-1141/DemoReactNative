import { SELECTED_CATEGORY, UNSELECTED_CATEGORY } from "../actions/actionTypes"

export function selectedCategory(value) {
  // console.warn(value);
  return {
    type: SELECTED_CATEGORY,
    value
  }
}

export function unselectedCategory(value) {
  //    console.warn(value);
  return {
    type: UNSELECTED_CATEGORY,
    value
  }
}
