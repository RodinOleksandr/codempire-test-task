import React from 'react';
import './Button.css';

const Button = props => {

  const cls = ['ButtonStyle' , props.type ]
  return(
    <button

      onClick = { props.onClick }
      className = {cls.join(' ')}

    >
      {props.children}
    </button>
  )
}

export default Button;
