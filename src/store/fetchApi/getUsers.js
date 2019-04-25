import axios from 'axios';

import {
  REQUEST_USERS_LIST,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED
} from './actions';

export default function() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_USERS_LIST
    });

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        dispatch({
          type: REQUEST_USERS_SUCCESS,
          payload: data
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
