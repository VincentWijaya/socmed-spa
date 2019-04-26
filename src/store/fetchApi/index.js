import {
  REQUEST_USERS_LIST,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  REQUEST_ALBUMS_LIST,
  REQUEST_ALBUMS_SUCCESS,
  REQUEST_ALBUMS_FAILED,
  REQUEST_POSTS_LIST,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  REQUEST_COMMENTS_LIST,
  REQUEST_COMMENTS_SUCCESS,
  REQUEST_COMMENTS_FAILED,
} from './actions';

const initialState = {
  users: {
    isLoaded: false
  },
  albums: {
    isLoaded: false
  },
  posts: {
    isLoaded: false
  },
  comments: {
    isLoaded: false
  },
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
      case REQUEST_POSTS_LIST:
        return {
          ...state
        }
      case REQUEST_POSTS_SUCCESS:
        return {
          ...state,
          posts: {
            isLoaded: true,
            data: action.payload.posts
          }
        }
      case REQUEST_POSTS_FAILED:
        return {
          ...state,
          posts: {
            isLoaded: true,
            data: {},
            errors: 'error getting posts'
          }
        }
      case REQUEST_COMMENTS_LIST:
        return {
          ...state
        }
      case REQUEST_COMMENTS_SUCCESS:
        return {
          ...state,
          comments: {
            isLoaded: true,
            data: action.payload.comments
          }
        }
      case REQUEST_COMMENTS_FAILED:
        return {
          ...state,
          comments: {
            isLoaded: true,
            data: {},
            errors: 'error getting comments'
          }
        }
    default:
      return state
  }
};

export default FetchApiReducer;
