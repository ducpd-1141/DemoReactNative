export const types = {
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
  FETCH_DATA_REQUEST: 'FETCH_DATA_REQUEST',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  SELECTED_CATEGORY: 'SELECTED_CATEGORY',
  UNSELECTED_CATEGORY: 'SELECTED_CATEGORY',
  LOAD_VENUE_TIPS: 'LOAD_VENUE_TIPS',
};

const selectedCategory = category => ({
  type: types.SELECTED_CATEGORY,
  category,
});

const unselectedCategory = category => ({
  type: types.UNSELECTED_CATEGORY,
  category,
});

export const actionCreator = {
  selectedCategory,
  unselectedCategory,
};
