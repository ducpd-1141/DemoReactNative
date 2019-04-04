export const types = {
  fetching: 'map/fetching',
  fetchingSuccess: 'map/fetchingSuccess',
  fetchingError: 'map/fetchingError',
};

export const fetching = payload => ({
  type: types.fetching,
  payload,
});

export const fetchingSuccess = payload => ({
  type: types.fetchingSuccess,
  payload,
});

export const fetchingError = payload => ({
  type: types.fetchingError,
  payload,
});

export const actionCreator = {
  fetching,
  fetchingSuccess,
  fetchingError,
};
