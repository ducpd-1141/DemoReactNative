import types from './types';

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

export default {
  fetching,
  fetchingSuccess,
  fetchingError,
};
