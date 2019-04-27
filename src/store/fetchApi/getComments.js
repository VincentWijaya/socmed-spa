import axios from 'axios';

import {
  REQUEST_COMMENTS_LIST,
  REQUEST_COMMENTS_SUCCESS,
  REQUEST_COMMENTS_FAILED
} from './actions';

export default function (id) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_COMMENTS_LIST
    });

    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(({ data }) => {
        dispatch({
          type: REQUEST_COMMENTS_SUCCESS,
          payload: {
            comments: data,
          },
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: REQUEST_COMMENTS_FAILED
        });
      });
  }
};
