import { types } from './actions';

const initState = {
  isFetching: false,
  isError: false,
};

const mapReducer = (state = initState, { type, payload }) => {
  console.log('mapReducer: ', JSON.stringify(payload));
  switch (type) {
    case types.fetching:
      return {
        ...state,
        isFetching: true,
      };
    case types.fetchingSuccess:
      return {
        ...state,
        isFetching: false,
      };
    case types.fetchingError:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default: return state;
  }
};

export default mapReducer;
