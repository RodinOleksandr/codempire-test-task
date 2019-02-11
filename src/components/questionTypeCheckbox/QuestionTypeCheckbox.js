import React from 'react';
import Checkbox from '../UI/Checkbox/Checkbox'

function renderCheckbox (id , answers ){

  return  Object.keys(answers).map((id) => {

      return(

          <label className="checkbox" key = {id} style = {{display : 'block'}}>
            <Checkbox value = {id}   name = {`${'answer' + id}`} id = {id}/>
            {answers[id]}
          </label>
      )
    })}

 const QuestionTypeCheckbox = (props) => {

  return (
    <div>
      <h4>{`${props.questionBlock.id + 1 + '. '}`}{props.questionBlock.question}</h4>
      <form onChange = {(event , id) => props.onChange(event , props.questionBlock.id)} >
        {renderCheckbox(props.questionBlock.id , props.questionBlock.answers )}
      </form>
    </div>
  )
}


export default QuestionTypeCheckbox
