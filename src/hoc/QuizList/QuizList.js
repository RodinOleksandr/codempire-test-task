import React, {Component} from 'react'
import  './QuizList.css'
import {connect} from 'react-redux'
import {fetchQuiz} from '../../store/actions/quiz'
import  './QuizList.css'
 class QuizList extends Component{

  renderQuizes (){

    return this.props.quizes.map((quiz, index)=>{

      return <li   key = {index}   onClick = {() =>this.props.fetchQuiz(index)}>{quiz}  </li>
    })
  }


  render() {
    return(
      <React.Fragment>
      {!this.props.quizStarted
      ?
      <div className = 'QuizList'>
        <div>
          <h3>Список предметов:</h3>
          <ul>
            {this.renderQuizes()}
          </ul>

        </div>
        </div>
        :
        <main>
          {this.props.children}
        </main>
    }
    </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return{
    quizes : state.quiz.quizLinks,
    quizStarted : state.quiz.quizStarted,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    fetchQuiz : (index) => dispatch( fetchQuiz(index) )

  }
}

export default connect(mapStateToProps, mapDispatchToProps )(QuizList)
