import React, {Component} from 'react'
import  './Quiz.css'
import {connect} from 'react-redux'
import QuestionTypeField from '../../components/questionTypeField/QuestionTypeField'
import QuestionTypeRadio from '../../components/questionTypeRadio/QuestionTypeRadio'
import QuestionTypeCheckbox from '../../components/questionTypeCheckbox/QuestionTypeCheckbox'
import QuestionTypeSelect from '../../components/questionTypeSelect/QuestionTypeSelect'
import Button from '../../components/UI/Button/Button'
import {handleChange , handleCheck , setQuestionList , handleCansel, clearForm } from '../../store/actions/quiz'
import ConfirmWindow from '../../components/confirmWindow/ConfirmWindow'


class Quiz extends Component{



  checkType = (quiz , index) => {

    switch (quiz.type ) {
      case 'field':
        return <QuestionTypeField
                  questionBlock = {quiz}
                  onChange={(event , id) => this.props.handleChange(event , id)}
                  key = {index}
                />

      case 'radio':
        return <QuestionTypeRadio
                  questionBlock = {quiz}
                  onChange={(event , id) => this.props.handleChange(event , id)}
                  key = {index}
                />

      case 'checkbox':
        return <QuestionTypeCheckbox
                  questionBlock = {quiz}
                  onChange={(event , id , type = 'checkbox') => this.props.handleChange(event , id , type)}
                  key = {index}
                />

      case 'select':
        return <QuestionTypeSelect
                  questionBlock = {quiz}
                  onChange={(event , id) => this.props.handleChange(event , id)}
                  key = {index}
                />

      default:
        return <h1>'Неизвестный формат'</h1>
  }

  }



  componentWillMount() {

     let activeQuiz = this.props.activeQuiz,
     quiz = this.props.quizes[activeQuiz],
     questionListItems = [],
     activeQuestions = []

     for (let i = 0; i < quiz.length; i++) {
       let index = i
       let question = this.checkType(quiz[i] , index)
      questionListItems.push(question)
      activeQuestions.push(question.props.questionBlock.question)
     }
       this.props.setQuestionList(activeQuestions,questionListItems)
  }


  renderQuestions(){
    return this.props.questionListItems
  }

  showResult = async () => {
    await this.props.handleCheck()

    if ( !this.props.showConfirm) {
      this.props.history.push('/result')
    }
  }



  render(){

    return (
      <React.Fragment>
        <div className = 'Quiz'>
          <div>
            {this.renderQuestions()}
            <div className = 'buttonBlock'>
            <Button type = 'success' onClick = {this.showResult}>Проверить</Button>
            <Button type = 'primary' onClick = {this.props.clearForm}>Сбросить</Button>
            </div>
          </div>
        </div>
        {this.props.showConfirm
        ? <ConfirmWindow  handleCansel = {this.props.handleCansel} handleConfirm = {this.props.handleConfirm}/>
        : null}
      </React.Fragment>
    )
  }
}


function mapStateToProps(state) {
  return{
    showConfirm : state.quiz.showConfirm,
    activeQuiz : state.quiz.activeQuiz,
    quizes : state.quiz.quizes,
    questionListItems : state.quiz.questionListItems,

  }
}

function mapDispatchToProps(dispatch) {
  return{
    handleChange : (event , id , type) => dispatch(handleChange(event , id , type) ),
    handleCheck : () => dispatch (handleCheck()),
    setQuestionList : (activeQuestions , questionListItems) => dispatch(setQuestionList(activeQuestions, questionListItems)),
    handleCansel  : () => dispatch (handleCansel()),
    clearForm  : (event) => dispatch (clearForm(event)),
  }
}

export default connect(mapStateToProps , mapDispatchToProps )(Quiz)
