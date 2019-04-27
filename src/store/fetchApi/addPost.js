import {
  ADDING_POST_SUCCESS
} from './actions';

export default function (body) {
  return (dispatch) => {
    dispatch({
      type: ADDING_POST_SUCCESS,
      payload: {
        newPost: body
      }
    })
  }
};
