import { combineReducers } from 'redux'
import postReduce from './postReducer'

export default combineReducers({
    posts : postReduce
})