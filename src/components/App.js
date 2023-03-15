//импорты
import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupEditProfile from "./PopupEditProfile.js";
import PopupAddCard from './PopupAddCard.js';
import PopupEditAvatar from './PopupEditAvatar.js';
import ImagePopup from './ImagePopup.js';
import PopupDeleteCard from './PopupDeleteCard.js';
//  Основной компонент, который собирает приложение
function App() {
  // Cтейт-переменные:
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false); // попап-Редактирование профиля
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false); // попап-Добавление карточки
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); // попап-Редактирование аватара
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); // попап-Увеличение изображения
  const [selectedCard, setSelectedCard] = useState({}); //данные-Передача данных при увеличении изображения
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false); // попап-Удаление карточки 
  // Функции:
  // Обработчик открытия попапа редактирования профиля
  function handleEditProfileClick () { setIsEditProfilePopupOpen(true) }
  // Обработчик открытия попапа добавления карточки
  function handleAddPlaceClick () { setIsAddPlacePopupOpen(true) }
  // Обработчик открытия попапа обновления аватара
  function handleEditAvatarClick () { setIsEditAvatarPopupOpen(true) }
  // Обработчик открытия попапа удаления карточки
  function handleDeleteCardClick () { setIsDeleteCardPopupOpen(true) }
  // Обработчик открытия попапа фото
  function handleCardClick (cardItem) {
    setIsImagePopupOpen(true);
    setSelectedCard({
      ...selectedCard,
      name: cardItem.name,
      link: cardItem.link
    })
  }
  // Функция для закрытия всех попапов
  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsImagePopupOpen(false);
  }
  // Сборка страницы из компонентов
  return (
    <div className="page">
      < Header />
      < Main 
        onEditAvatar = { handleEditAvatarClick }
        onEditProfile = { handleEditProfileClick }
        onAddPlace = { handleAddPlaceClick }
        onCardClick = { handleCardClick }
        onCardDelete = { handleDeleteCardClick }
      />
      < Footer />
      < PopupEditProfile
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
      />
      < PopupAddCard
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
      />
      < PopupEditAvatar
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
      />
      < ImagePopup
        card = { selectedCard }
        isOpen = { isImagePopupOpen }
        onClose = { closeAllPopups }
      />
      < PopupDeleteCard
        isOpen = { isDeleteCardPopupOpen }
        onClose = { closeAllPopups }
      />
  </div>
  );
}

export default App;
