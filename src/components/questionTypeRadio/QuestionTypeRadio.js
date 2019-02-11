import React from 'react';
import RadioButton from '../UI/RadioButton/RadioButton'

function renderRadioButton (id , answers ){

  return  Object.keys(answers).map((id) => {

      return(

          <label className="radio" key = {id} style = {{display : 'block'}}>
            <RadioButton value = {id}  name = {'answer'} id = {id}/>
            {answers[id]}
          </label>

      )
    })}

 const QuestionTypeRadio = (props) => {
  return (
    <div>
      <h4>{`${props.questionBlock.id + 1 + '. ' + props.questionBlock.question}` }</h4>
      <form onChange = {(event , id) => props.onChange(event , props.questionBlock.id) } >
        {renderRadioButton(props.questionBlock.id , props.questionBlock.answers)}

      </form>
    </div>
  )
}


export default QuestionTypeRadio
