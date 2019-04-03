import { SELECTED_CATEGORY, UNSELECTED_CATEGORY } from './actionTypes';

export const selectedCategory = value => ({
  type: SELECTED_CATEGORY,
  value,
});

export const unselectedCategory = value => ({
  type: UNSELECTED_CATEGORY,
  value,
});
