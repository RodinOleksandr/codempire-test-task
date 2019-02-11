import {combineReducers} from 'redux'
import quizReduce from './quizReducer'


export default combineReducers({
  quiz : quizReduce,


})
