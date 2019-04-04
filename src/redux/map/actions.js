export const types = {
  fetching: 'map/fetching',
  fetchingSuccess: 'map/fetchingSuccess',
  fetchingError: 'map/fetchingError',
};

const fetching = payload => ({
  type: types.fetching,
  payload,
});

const fetchingSuccess = payload => ({
  type: types.fetchingSuccess,
  payload,
});

const fetchingError = payload => ({
  type: types.fetchingError,
  payload,
});

export const actionCreator = {
  fetching,
  fetchingSuccess,
  fetchingError,
};
