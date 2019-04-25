import {
  REQUEST_USERS_LIST,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
} from './actions';

const initialState = {
  isLoaded: false
};

const FetchApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS_LIST:
      return {
        ...state
      }
    case REQUEST_USERS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        users: action.payload
      }
    case REQUEST_USERS_FAILED:
      return {
        ...state,
        isLoaded: true,
        users: {},
        errors: 'error getting data'
      }
    default:
      return state
  }
};

export default FetchApiReducer;
