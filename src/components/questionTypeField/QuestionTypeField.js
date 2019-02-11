import React from 'react';
import './Input.css'
 const QuestionTypeField = (props) => {

  return (
    <div className = 'Input' onChange = {(event , id) => props.onChange(event , props.questionBlock.id)} >
      <h4>{`${props.questionBlock.id+1 + '. '}` }{props.questionBlock.question}</h4>
      <input type = 'text'  id = {props.questionBlock.id}/>
    </div>
  )
}



export default QuestionTypeField
