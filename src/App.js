import React, { Component } from 'react'
import './App.css'
import {Route,Switch , withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Quiz from './containers/Quiz/Quiz'
import FinishedQuiz from './containers/FinishedQuiz/FinishedQuiz'

class App extends Component {
  render() {
    return(
    <div>
      <Switch>
        <Route path = '/result'  component = {FinishedQuiz}/>
        <Route path = '/'  component = {Quiz}/>
      </Switch>
  </div>
)
    ;
  }
}

export default withRouter(connect()(App))
