import {
  EDIT_COMMENT_SUCCESS
} from './actions';

export default function (comment) {
  return (dispatch) => {
    dispatch({
      type: EDIT_COMMENT_SUCCESS,
      payload: {
        editedComment: comment
      }
    })
  }
};
