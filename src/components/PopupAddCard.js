import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function PopupAddCard (props) {
  return (
    <PopupWithForm
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      name = 'add-card'
      title = 'Новое место'>
       <input className="popup__input popup__input_card-name"
           type="text" name="name" id="card-name" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required/>
        <span className="popup__input-error" id="card-name-error"></span>
        <input className="popup__input popup__input_img-link"
           type="url" name="link" id="link-img" placeholder="Сылка на картинку" autoComplete="off" minLength="2" required/>
        <span className="popup__input-error" id="link-img-error"></span>
    </PopupWithForm>
  )
}

export default PopupAddCard;