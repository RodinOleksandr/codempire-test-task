import React from 'react';


const RadioButton = props => {

  return(
    <input
      type = 'radio'
      value = {props.value}
      name = {props.name}
      id = {props.id}
    />
  )
}

export default RadioButton;
