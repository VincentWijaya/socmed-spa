import {
  EDIT_POST_SUCCESS
} from './actions';

export default function (body) {
  return (dispatch) => {
    dispatch({
      type: EDIT_POST_SUCCESS,
      payload: {
        editedPost: body
      }
    })
  }
};
