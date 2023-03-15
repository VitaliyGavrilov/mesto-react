import React from 'react';

function Card (props) {

  function handleCardClick () { props.onCardClick(props.card) }//клик на карточку
  function handleDeleteCardClick () { props.onCardDelete() }//клик на корзину карточки

  return (
    <div className="element__container">
      <button className="element__delete-button" onClick={ handleDeleteCardClick  } ></button>
      <img className="element__img" src={props.link} alt={props.name} onClick={ handleCardClick }/>
      <div className="element__block">
        <h2 className="element__name">{props.name}</h2>
        <div className ="element__like-block">
          <button className="element__like-button" type="button" aria-label="Кнопка лайка"></button>
          <span className="element__likes-number">{props.like > 0 ? props.like : null}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;