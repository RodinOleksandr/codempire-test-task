import React, {Component} from 'react'
import classes from './FinishedQuiz.css'
import {connect} from 'react-redux'

class FinishedQuiz extends Component{

  render(){
    return (
      <h1>Bye</h1>
    )
  }
}

export default connect()(FinishedQuiz)
