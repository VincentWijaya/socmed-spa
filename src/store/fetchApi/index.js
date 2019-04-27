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
  REQUEST_PHOTOS_LIST,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
  ADDING_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  DELETE_POST_SUCCESS,
  ADDING_POST_SUCCESS,  
  EDIT_POST_SUCCESS,
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
  photos: {
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
      case REQUEST_PHOTOS_LIST:
        return {
          ...state,
          photos: {
            isLoaded: false,
          }
        }
      case REQUEST_PHOTOS_SUCCESS:
        return {
          ...state,
          photos: {
            isLoaded: true,
            data: action.payload.photos
          }
        }
      case REQUEST_PHOTOS_FAILED:
        return {
          ...state,
          photos: {
            isLoaded: true,
            data: {},
            errors: 'error getting photos'
          }
        }
      case ADDING_COMMENT_SUCCESS:
        const comments = state.comments.data;
        return {
          ...state,
          comments: {
            isLoaded: true,
            data: [...comments, action.payload.newComment]
          }
        }
      case DELETE_COMMENT_SUCCESS:
        let newComments;

        if (action.payload.deletedComment === 0) {
          newComments = state.comments.data.slice(1);
        } else {
          newComments = state.comments.data.splice(action.payload.deletedComment, state.comments.data.length);
        }

        return {
          ...state,
          comments: {
            isLoaded: true,
            data: newComments
          }
        }
      case EDIT_COMMENT_SUCCESS:
        state.comments.data[action.payload.editedComment.index] = action.payload.editedComment;

        return {
          ...state
        }
      case DELETE_POST_SUCCESS:
        let newPosts;

        if (action.payload.deletedPost === 0) {
          newPosts = state.posts.data.slice(1);
        } else {
          newPosts = state.posts.data.splice(action.payload.deletedPost, state.posts.data.length);
        }

        return {
          ...state,
          posts: {
            isLoaded: true,
            data: newPosts
          }
      }
      case ADDING_POST_SUCCESS:
        const posts = state.posts.data;
        return {
          ...state,
          posts: {
            isLoaded: true,
            data: [...posts, action.payload.newPost]
          }
      }
      case EDIT_POST_SUCCESS:
        state.posts.data[action.payload.editedPost.index] = action.payload.editedPost;

        return {
          ...state
        }
    default:
      return state
  }
};

export default FetchApiReducer;
