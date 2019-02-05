import React, {Component} from 'react'
import classes from './Quiz.css'
import {connect} from 'react-redux'

class Quiz extends Component{

  render(){

    return (
      <h1>Hello</h1>
    )
  }
}

export default connect()(Quiz)
