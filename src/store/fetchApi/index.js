import {
  REQUEST_USERS_LIST,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  REQUEST_ALBUMS_LIST,
  REQUEST_ALBUMS_SUCCESS,
  REQUEST_ALBUMS_FAILED
} from './actions';

const initialState = {
  users: {
    isLoaded: false
  },
  albums: {
    isLoaded: false
  }
};

const FetchApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS_LIST:
      return {
        ...state,
      }
    case REQUEST_USERS_SUCCESS:
      return {
        ...state,
        users: {
          isLoaded: true,
          data: action.payload.users
        }
      }
    case REQUEST_USERS_FAILED:
      return {
        ...state,
        users: {
          isLoaded: true,
          data: {},
          errors: 'error getting users',
        },
      }
      case REQUEST_ALBUMS_LIST:
        return {
          ...state
        }
      case REQUEST_ALBUMS_SUCCESS:
        return {
          ...state,
          albums: {
            isLoaded: true,
            data: action.payload.albums
          }
        }
      case REQUEST_ALBUMS_FAILED:
        return {
          ...state,
          albums: {
            isLoaded: true,
            data: {},
            errors: 'error getting albums'
          }
        }
    default:
      return state
  }
};

export default FetchApiReducer;
