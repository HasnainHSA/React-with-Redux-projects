import changeNum from './counter'
import { combineReducers } from 'redux'

// in this we combine all the reducer in one root reducer if we have
// ? ignore that if you have only one
const rootReducer = combineReducers({
    changeNum,
})

export default rootReducer