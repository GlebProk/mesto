import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { config } from '../utils/constants.js';
import { initialCards } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

const cardsSection = document.querySelector('.elements');

const popupFormProfile = document.querySelector('.popup_edit-profile');
const popupItemName = popupFormProfile.querySelector('.popup__item_field_name');
const popupItemVocation = popupFormProfile.querySelector('.popup__item_field_vocation');

const popupFormAddCard  = document.querySelector('.popup_add-card');

const popupCardImage = document.querySelector('.popup_card-image');

const profileInfoName = document.querySelector('.profile__name');
const profileInfoVocation = document.querySelector('.profile__vocation');

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const formAddCard = document.querySelector('#Add_Card');
const formEditProfile = document.querySelector('#Edit_Profile');

// создаем экземпляры класса FormValidator
const validFormProfile = new FormValidator(config, formEditProfile);
const validFormAddCard = new FormValidator(config, formAddCard);
// включаем валидацию двух форм
validFormProfile.enableValidation();
validFormAddCard.enableValidation();

// Создаем экземпляр класса UserInfo
const profileInfo = new UserInfo({name: profileInfoName, vocation: profileInfoVocation});

// Создаем экземпляр класса PopupWithForm
// для формы редактирования профиля
const openPopupFormProfile = new PopupWithForm({
  handleFormSubmit: (data) => {
    profileInfo.setUserInfo(data);
}},
popupFormProfile)

openPopupFormProfile.setEventListeners();

// Открытие формы редактирования профиля
editButton.addEventListener('click', () => {
  const profileList = profileInfo.getUserInfo();
  popupItemName.value = profileList.name;
  popupItemVocation.value = profileList.vocation;

  openPopupFormProfile.open();

  validFormProfile.hideSpan();

});

// Функция создания карточки
function createCard(link, name) {
  // создаем экземпляр класса Card
  const card = new Card (link, name, '#card',
  { handleCardClick: (link, name) => {
      popupCardImageOpen.open(name, link);
    }
  });
  // передаем готовую карточку к публикации
  const cardElement = card.createCard();

  return cardElement;
}

const popupCardImageOpen = new PopupWithImage(popupCardImage);
popupCardImageOpen.setEventListeners();

// добавляем 6 карточек из начального массива при загрузке страницы
const cardsList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    cardsList.addItem(createCard(cardItem.link, cardItem.name));
  }
},
cardsSection);

cardsList.renderItems();

// Создаем экземпляр класса PopupWithForm
// для формы добавления новой карточки
const openPopupFormAddCard = new PopupWithForm({
  handleFormSubmit: (data) => {
    const popupAddCard = new Section({
      items: [data],
      renderer: (cardItem) => {
        popupAddCard.addItem(createCard(cardItem.link, cardItem.mesto));
      }
    },
    cardsSection);
    popupAddCard.renderItems();
}},
popupFormAddCard)

openPopupFormAddCard.setEventListeners();

// Открытие формы добавления новой карточки
addCardButton.addEventListener('click', () => {
  formAddCard.reset();
  validFormAddCard.hideSpan();
  openPopupFormAddCard.open();
});
