import {
  REQUEST_USERS_LIST,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  REQUEST_ALBUMS_LIST,
  REQUEST_ALBUMS_SUCCESS,
  REQUEST_ALBUMS_FAILED,
  RESET_LOADER
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
      case REQUEST_ALBUMS_LIST:
        return {
          ...state
        }
      case REQUEST_ALBUMS_SUCCESS:
        return {
          ...state,
          isLoaded: true,
          albums: action.payload
        }
      case REQUEST_ALBUMS_FAILED:
        return {
          ...state,
          isLoaded: true,
          albums: {},
          errors: 'error getting data'
        }
      case RESET_LOADER:
        return {
          ...state,
          isLoaded: false
        }
    default:
      return state
  }
};

export default FetchApiReducer;
