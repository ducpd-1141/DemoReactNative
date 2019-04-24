export const types = {
  searchForCategory: 'search/searchForCategory',
  receivedVenues: 'search/receivedVenues',
  clear: 'search/clear',
  loadMore: 'search/loadMore',
  fetchingError: 'search/fetchingError',
  fetchingSuccess: 'search/fetchingSuccess',
  fetching: 'search/fetching',
};

const searchForCategory = payload => ({
  type: types.searchForCategory,
  payload,
});

const receivedVenues = venues => ({
  type: types.receivedVenues,
  venues,
});

const fetching = payload => ({
  type: types.fetching,
  payload,
});

const clear = () => ({
  type: types.clear,
});

const loadMore = () => ({
  type: types.loadMore,
});

export const actionCreator = {
  searchForCategory,
  receivedVenues,
  fetching,
  clear,
  loadMore,
};
