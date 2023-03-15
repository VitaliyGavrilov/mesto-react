import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function PopupEditProfile (props) {
  return (
    <PopupWithForm 
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      name = 'edit-profile'
      title = 'Редактировать профиль'>
        <input className="popup__input popup__input_data_name"
            type="text" name="name" id="name" placeholder="Имя" autoComplete="off" minLength="2" maxLength="40" required/>
        <span className="popup__input-error" id="name-error"></span>
        <input className="popup__input popup__input_data_profession"
            type="text" name="profession" id="profesion" placeholder="Вид деятельности" autoComplete="off" minLength="2" maxLength="200" required/>
        <span className="popup__input-error" id="profesion-error"></span>
    </PopupWithForm>
  )
}
export default PopupEditProfile;