import React from 'react';


const Checkbox = props => {

  return(
    <input 
      type="checkbox"
      value = {props.value}
      name = {props.name}
      id = {props.id}
    />
  )
}

export default Checkbox;
