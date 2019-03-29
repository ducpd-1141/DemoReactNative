// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import reducers from '../reducers';

// const createStoreWithMiddleware = applyMiddleware(createStore);
// const store = createStore(combineReducers(reducers));
// export default store;

// import { createStore, applyMiddleware } from 'redux'
// import reducers from '../reducers'

// function logger({ getState }) {
//   return next => action => {
//     console.log('will dispatch', action)

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action)

//     console.log('state after dispatch', getState())

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue
//   }
// }

// const store = createStore(reducers, ['Use Redux'], applyMiddleware(logger))
// const store = createStoreWithMiddleware(combineReducers(reducers));
// export default store;

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Understand the middleware'
// })

import { createStore } from "redux"
import rootReducer from "../reducers"

export default function configureStore() {
  let store = createStore(rootReducer)
  return store
}
