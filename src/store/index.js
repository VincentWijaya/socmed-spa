import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import fetchApi from './fetchApi/'

const rootReducers = combineReducers({
  fetchApi
})

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store