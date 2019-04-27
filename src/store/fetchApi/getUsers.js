import axios from 'axios';

import {
  REQUEST_USERS_LIST,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED
} from './actions';

export default function(query, value) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_USERS_LIST
    });

    let url = 'https://jsonplaceholder.typicode.com/users';

    if (query && value) {
      url = `https://jsonplaceholder.typicode.com/users?${query}=${value}`
    }

    axios
      .get(url)
      .then(({ data }) => {
        dispatch({
          type: REQUEST_USERS_SUCCESS,
          payload: {
            users: data,
          },
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: REQUEST_USERS_FAILED
        });
      });
  }
};
