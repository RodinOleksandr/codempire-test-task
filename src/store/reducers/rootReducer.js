import {combineReducers} from 'redux'
import quizReduce from './quizReducer'
import finishedQuizReduce from './finishedQuizReducer'

export default combineReducers({
  quiz : quizReduce,
  finishedQuiz : finishedQuizReduce,

})
