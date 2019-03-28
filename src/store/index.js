import { createStore } from 'redux'
import rootReducer from '../reducers'

export default configureStore = () => {
  return createStore(rootReducer)
}
