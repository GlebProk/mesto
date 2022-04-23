import {config, FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsSection = document.querySelector('.elements');

const popups = document.querySelectorAll('.popup');

const popupFormProfile = document.querySelector('.popup_edit-profile');
const popupItemName = popupFormProfile.querySelector('.popup__item_field_name');
const popupItemVocation = popupFormProfile.querySelector('.popup__item_field_vocation');

const popupFormAddCard  = document.querySelector('.popup_add-card');
const popupItemMesto = popupFormAddCard.querySelector('.popup__item_field_mesto');
const popupItemLink = popupFormAddCard.querySelector('.popup__item_field_link');

const popupCardImage = document.querySelector('.popup_card-image');
const popupFormImage = popupCardImage.querySelector('.popup__image');
const popupFormFigcaption = popupCardImage.querySelector('.popup__figcaption');

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


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscUp);
}

function editProfile() {
  popupItemName.value = profileInfoName.innerText;
  popupItemVocation.value = profileInfoVocation.innerText;
  validFormProfile.hideSpan();
  openPopup(popupFormProfile);
}

function saveProfile(evt) {
  evt.preventDefault();
  profileInfoName.innerText = popupItemName.value;
  profileInfoVocation.innerText = popupItemVocation.value;
  closePopup(popupFormProfile);
}

function handleCardClick(link, name) {
  popupFormImage.src = link;
  popupFormImage.alt = name;
  popupFormFigcaption.textContent = name;
  openPopup(popupCardImage);
}

function createCard(link, name) {
  // создаем экземпляр класса Card
  const card = new Card (link, name, '#card', handleCardClick);
  // передаем готовую карточку к публикации
  const cardElement = card.createCard();

  return cardElement;
}

// закрытие попапа при клике на крестик и на оверлей
popups.forEach((popup) => {popup.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
    closePopup(popup);}
  });
});

// функция закрытия попап при нажатии на ESC
const handleEscUp = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

// открываем форму редактирования профиля
editButton.addEventListener('click', editProfile);

// сохраняем изменения
popupFormProfile.addEventListener('submit', saveProfile);


// добавляем 6 карточек из начального массива при загрузке страницы
initialCards.forEach((item) => {
  cardsSection.append(createCard(item.link, item.name));
});

// открываем форму добавления новой карточки
addCardButton.addEventListener('click', () => {
  formAddCard.reset();
  validFormAddCard.hideSpan();
  openPopup(popupFormAddCard);
});

// добавляем новую карточку в секцию
popupFormAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();

  cardsSection.prepend(createCard(popupItemLink.value, popupItemMesto.value));
  closePopup(popupFormAddCard);
  // очищаем поля формы
  evt.target.reset();
});

export { openPopup, handleCardClick };
