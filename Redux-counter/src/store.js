import rootReducer from './reducer/combineRe'
import { createStore } from 'redux'

// in this file we got are centeral store where we are calling are all states
const store = createStore(rootReducer)

export default store;