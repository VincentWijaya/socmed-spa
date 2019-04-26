import axios from 'axios';

import {
  REQUEST_POSTS_LIST,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED
} from './actions';

export default function (query, userId) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_POSTS_LIST
    });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?${query}=${userId}`)
      .then(({ data }) => {
        dispatch({
          type: REQUEST_POSTS_SUCCESS,
          payload: {
            posts: data,
          },
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: REQUEST_POSTS_FAILED
        });
      });
  }
};
