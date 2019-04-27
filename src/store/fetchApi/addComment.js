import {
  ADDING_COMMENT_SUCCESS
} from './actions';

export default function (body) {
  return (dispatch) => {
    dispatch({
      type: ADDING_COMMENT_SUCCESS,
      payload: {
        newComment: body
      }
    })
  }
};
