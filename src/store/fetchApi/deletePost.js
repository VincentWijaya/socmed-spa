import {
  DELETE_POST_SUCCESS
} from './actions';

export default function (index) {
  return (dispatch) => {
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: {
        deletedPost: index
      }
    })
  }
};
