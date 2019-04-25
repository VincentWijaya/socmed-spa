import axios from 'axios';

import {
  REQUEST_ALBUMS_LIST,
  REQUEST_ALBUMS_SUCCESS,
  REQUEST_ALBUMS_FAILED
} from './actions';

export default function () {
  return (dispatch) => {
    dispatch({
      type: REQUEST_ALBUMS_LIST
    });

    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(({ data }) => {
        dispatch({
          type: REQUEST_ALBUMS_SUCCESS,
          payload: data
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: REQUEST_ALBUMS_FAILED
        });
      });
  }
};
