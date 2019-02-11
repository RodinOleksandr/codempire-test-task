import React from 'react';
import './ConfirmWindow.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom';

const  ConfirmWindow = props => {
  return(
    <div className = 'ConfirmWindow'>
      <div>
        <h4>Каждый не заполненный ответ на вопрос считается неправильным , Вы уверенны что хотите продолжить?</h4>
        <Link to = '/result'>
        <Button type = 'success' onClick = {props.handleConfirm}>Продолжить</Button>
        </Link>
        <Button type = 'primary' onClick = {props.handleCansel}>Отменить</Button>
      </div>

    </div>
  )
}

export default  ConfirmWindow
