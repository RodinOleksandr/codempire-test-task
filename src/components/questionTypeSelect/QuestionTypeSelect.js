import React from 'react';
import  './Select.css';

 const QuestionTypeSelect = (props) => {
   let answers = props.questionBlock.answers
  return (
    <div className = 'Select' onChange = {(event , id) => props.onChange(event , props.questionBlock.id) } id = {props.questionBlock.id}>
      <h4>{`${props.questionBlock.id + 1 + '. '}`}{props.questionBlock.question}</h4>
      <select defaultValue = {null} id = 'select'>
        <option  style={{display: 'none'}} value='null' id = 'selected'></option>
        <option value={answers[0]} >{answers[0]}</option>
        <option value={answers[1]}>{answers[1]}</option>
        <option value={answers[2]}>{answers[2]}</option>
        <option value={answers[3]}>{answers[3]}</option>
      </select>
    </div>
  )
}



export default QuestionTypeSelect
