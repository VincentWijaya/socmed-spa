import axios from 'axios';

import {
  REQUEST_PHOTOS_LIST,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED
} from './actions';

export default function (query, value) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_PHOTOS_LIST
    });

    axios
      .get(`https://jsonplaceholder.typicode.com/photos?${query}=${value}`)
      .then(({ data }) => {
        dispatch({
          type: REQUEST_PHOTOS_SUCCESS,
          payload: {
            photos: data,
          },
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: REQUEST_PHOTOS_FAILED
        });
      });
  }
};
