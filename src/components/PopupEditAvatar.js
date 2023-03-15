import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function PopupEditAvatar (props) {
  return (
    <PopupWithForm 
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      name = 'edit-avatar'
      title = 'Обновить аватар'>
        <input className="popup__input popup__input_link_avatar"
            type="url" name="avatar" id="avatar" placeholder="Сылка на аватар" autoComplete="off" minLength="2" required/>
        <span className="popup__input-error" id="avatar-error"></span>
    </PopupWithForm>
  )
}
export default PopupEditAvatar;