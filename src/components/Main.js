import React, { useEffect, useState } from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  // Cтейт-переменные:
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState(''); 
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  // Запрос на сервер для получения данных пользователя и карточек
  useEffect(() => {
    api
      .getUserInfo()
      .then((profileInfo) => {
        setUserName(profileInfo.name)
        setUserDescription(profileInfo.about)
        setUserAvatar(profileInfo.avatar)
      })
      .catch((err) => console.log(err))

    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData.map((data) => ({
          cardId: data._id,
          name: data.name,
          link: data.link,
          likes: data.likes
        })))
      })
      .catch((err) => console.log(err))
  },[]);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-block">
            <img className="profile__avatar" src={userAvatar} alt="Аватар" aria-label="Открыть попап редактирования аватара"/>
            <button type="button" className="profile__edit-avatar" onClick={ props.onEditAvatar } />
          </div>
          <div className="profile__card">
            <div className="profile__no-wrap">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Кнопка редактирования профиля" onClick={ props.onEditProfile } />
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Кнопка добавления фотографии" onClick={ props.onAddPlace} />
      </section>

      <section className="element">
      { cards.map((cardItem) => (
        < Card
          key = { cardItem.cardId }
          link = { cardItem.link }
          name = { cardItem.name }
          like = { cardItem.likes.length }
          card = { cardItem } 
          onCardClick = { props.onCardClick }
          onCardDelete = { props.onCardDelete }
        />
        )) 
      }
      </section>

    </main>
  )
}
export default Main;