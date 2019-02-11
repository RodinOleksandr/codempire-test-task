import {FETCH_QUIZ , SET_ANSWERS, RESULT , SET_QUESTIONS , CANSEL, CLEAR_ANSWER_STATE} from './actionTypes'

export function fetchQuiz(activeQuiz) {
  return{
    type :  FETCH_QUIZ,
    activeQuiz

  }
}

export function handleChange(event , id , type){
  return (dispatch , getState ) =>{

    let answer = getState().quiz.answerState

    if (type === 'checkbox') {
      if (!answer[id]) {
         answer[id] = []
      }
    let checkbox = answer[id].slice()
    checkbox[event.target.value] = !checkbox[event.target.value]
    answer[id] = checkbox
  } else {

    answer[id] = event.target.value
  }
    dispatch(addAnswers(answer))
  }
}

export function addAnswers(answer) {
  return {
    type : SET_ANSWERS,
    answer
  }
}

export function handleCheck(){
  return (dispatch , getState) => {

    let quiz = getState().quiz
    let activeQuiz = quiz.quizes[quiz.activeQuiz]
    let result = []
    let showConfirm = quiz.showConfirm
    for (var i = 0; i < activeQuiz.length; i++) {
      if (quiz.answerState[i] === undefined ) {
        showConfirm = true
      }
    }

    for (let i = 0; i < activeQuiz.length; i++) {



      if (Array.isArray(activeQuiz[i].rightAnswer)) {

        let rightAnswer = activeQuiz[i].rightAnswer
        let answerState = quiz.answerState[i] || []
        result[i] = rightAnswer.every(function(item, index) {
          return rightAnswer[index] === !!answerState[index]
        });
      } else {
          result[i] = activeQuiz[i].rightAnswer === quiz.answerState[i]
      }

    }
    dispatch(checkAnswers(result , showConfirm))
  }

}

export function checkAnswers(result , showConfirm) {
  return{
    type :  RESULT,
    result,
    showConfirm

  }
}

export function setQuestionList(activeQuestions , questionListItems){
  return {
    type : SET_QUESTIONS,
    activeQuestions , questionListItems
  }
}

export function handleCansel(){
  return{
    type: CANSEL
  }
}



export function clearForm(event) {
  return (dispatch) => {
    event.preventDefault()
     let input = document.getElementsByTagName('input')

     for (let i = 0; i < input.length; i++) {
       if (input[i].type === 'checkbox') {

         input[i].checked = false
       } else if (input[i].type === 'radio') {

         input[i].checked = false
       } else {
         input[i].value = ''
       }
     }
     document.getElementById('selected').selected = true
     dispatch(clearAnswerState())
  }


 }

 export function clearAnswerState(){
   return{
     type: CLEAR_ANSWER_STATE
   }
 }
