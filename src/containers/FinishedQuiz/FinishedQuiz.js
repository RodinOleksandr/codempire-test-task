import React, {Component} from 'react'
import {connect} from 'react-redux'
import './FinishedQuiz.css'
import {Link} from 'react-router-dom';
import Button from '../../components/UI/Button/Button'
import '../../components/UI/Button/Button.css'
import {clearState} from '../../store/actions/finishedQuiz'

class FinishedQuiz extends Component{

  render(){
      let counter = 0
      let checkIcon = null;
      return (
        <div className = 'FinishedQuiz'>
          <div>
          <h1>Результат</h1>
          <ul>
            {this.props.result.map((quizItem, index) =>{
              if ((this.props.result[index] === false)) {
                checkIcon = <i className = 'fa fa-times error' />
              } else {
                counter++
                checkIcon  = <i className = 'fa fa-check successfully'  />

              }
              return(

                <li key = {index}>

                  <span>
                  {index + 1}.
                  {this.props.activeQuestions[index]}
                  {checkIcon}
                  </span>
                </li>
              )
            })}

            </ul>
            <span className = 'result'>Вы ответили правильно на {counter} из {this.props.result.length}</span>
            <div>
              <Link to = '/'>
                <Button type = 'success' onClick = {this.props.clearState} >
                  <span>Показать список тестов</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }




function mapStateToProps(state) {
  return{
    result : state.quiz.result,
    activeQuestions : state.quiz.activeQuestions

  }
}

function mapDispatchToProps(dispatch) {
  return{
    clearState : () => dispatch(clearState())
  }
}

export default connect(mapStateToProps , mapDispatchToProps )(FinishedQuiz)
