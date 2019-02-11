import React, { Component } from 'react'
import './App.css'
import {Route,Switch , withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './hoc/QuizList/QuizList'
import FinishedQuiz from './containers/FinishedQuiz/FinishedQuiz'

class App extends Component {
  render() {
  const  routes = (
      <Switch>
        <Route path = '/result'   component = {FinishedQuiz}/>
        <Route path = '/'  component = {Quiz}/>
      </Switch>
    )
    return(

        <QuizList>
            {routes}
        </QuizList>
    
)
    ;
  }
}

export default withRouter(connect()(App))
