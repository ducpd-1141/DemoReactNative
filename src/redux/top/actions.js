export const types = {
  searchForCategory: 'top/searchForCategory',
  searchAll: 'top/searchAll',
  fetchingError: 'top/fetchingError',
  fetchingSuccess: 'top/fetchingSuccess',
  fetching: 'top/fetching',
};

const searchForCategory = payload => ({
  type: types.searchForCategory,
  payload,
});

const searchAll = () => ({
  type: types.searchAll,
});

export const actionCreator = {
  searchForCategory,
  searchAll,
};
