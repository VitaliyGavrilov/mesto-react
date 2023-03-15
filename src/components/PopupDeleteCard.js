import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function PopupDeleteCard (props) {
  return (
    <PopupWithForm 
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      name = 'delete-card'
      title = 'Вы уверены?'>
    </PopupWithForm>
  )
}
export default PopupDeleteCard;