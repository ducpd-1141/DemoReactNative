const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const SELECTED_CATEGORY = 'SELECTED_CATEGORY';
const UNSELECTED_CATEGORY = 'SELECTED_CATEGORY';
const LOAD_VENUE_TIPS = 'LOAD_VENUE_TIPS';

const types = {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SELECTED_CATEGORY,
  UNSELECTED_CATEGORY,
  LOAD_VENUE_TIPS,
};

const selectedCategory = category => ({
  type: SELECTED_CATEGORY,
  category,
});

const unselectedCategory = category => ({
  type: UNSELECTED_CATEGORY,
  category,
});

const actionCreator = {
  selectedCategory,
  unselectedCategory,
};

export { types, actionCreator };
