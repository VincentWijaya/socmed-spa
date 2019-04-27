import {
  DELETE_COMMENT_SUCCESS
} from './actions';

export default function (index) {
  return (dispatch) => {
    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: {
        deletedComment: index
      }
    })
  }
};
