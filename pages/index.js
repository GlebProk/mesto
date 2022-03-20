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
const cardTemplate = document.querySelector('#card').content;

const popupFormProfile = document.querySelector('.popup_edit-profile');
const profileCloseButton = popupFormProfile.querySelector('.popup__button-close');

const popupItemName = popupFormProfile.querySelector('.popup__item_field_name');
const popupItemVocation = popupFormProfile.querySelector('.popup__item_field_vocation');

const popupFormAddCard = document.querySelector('.popup_add-card');
const addCardCloseButton = popupFormAddCard.querySelector('.popup__button-close');
const saveCardButton = popupFormAddCard.querySelector('.popup__button-save');

const popupItemMesto = popupFormAddCard.querySelector('.popup__item_field_mesto');
const popupItemLink = popupFormAddCard.querySelector('.popup__item_field_link');

const profileInfoName = document.querySelector('.profile__name');
const profileInfoVocation = document.querySelector('.profile__vocation');
const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const popupCardImage = document.querySelector('.popup_card-image');
const imageCloseButton = popupCardImage.querySelector('.popup__button-close');


function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function editProfile() {
  popupItemName.value = profileInfoName.innerText;
  popupItemVocation.value = profileInfoVocation.innerText;
  popupOpen(popupFormProfile);
}

function saveProfile(evt) {
  evt.preventDefault();
  profileInfoName.innerText = popupItemName.value;
  profileInfoVocation.innerText = popupItemVocation.value;
  popupClose(popupFormProfile);
}

// функция создания новой карточки
function createCard(link, name) {
  // клонируем шаблон для карточки
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

  // присваиваем значения элементам карточки
  cardElement.querySelector('.elements__image').src = link;
  cardElement.querySelector('.elements__image').alt = name;
  cardElement.querySelector('.elements__title').textContent = name;

  // добавляем возможность ставить лайк
  cardElement.querySelector('.elements__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__heart_active');});

  // добавляем возможность удалить карточку
  cardElement.querySelector('.elements__trash').addEventListener('click', () => {cardElement.remove();});

  // добавляем возможность открыть фото из карточки
  cardElement.querySelector('.elements__button-image').addEventListener('click', () => {
    popupCardImage.querySelector('.popup__image').src = link;
    popupCardImage.querySelector('.popup__image').alt = name;
    popupCardImage.querySelector('.popup__figcaption').textContent = name;
    popupCardImage.querySelector('.popup__button-close').addEventListener('click', (evt) => {popupClose(popupCardImage);});
    popupOpen(popupCardImage);
  });

  // добавляем карточку в начало секции
  cardsSection.prepend(cardElement);
}

// функция добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();
  createCard(popupItemLink.value, popupItemMesto.value);
  popupClose(popupFormAddCard);

  // очищаем поля формы
  evt.target.reset();
}

// добавляем 6 карточек из начального массива при загрузке страницы
initialCards.forEach((item) => {createCard(item.link, item.name)});

// открываем форму редактирования профиля
editButton.addEventListener('click', editProfile);
// сохраняем изменения
popupFormProfile.addEventListener('submit', saveProfile);
// возможность закрыть форму без изменений
profileCloseButton.addEventListener('click', () => {popupClose(popupFormProfile)});

// открываем форму добавления новой карточки
addCardButton.addEventListener('click', () => {popupOpen(popupFormAddCard)});
// добавляем новую карточку в секцию
popupFormAddCard.addEventListener('submit', addNewCard);
// возможность закрыть форму без добавления новой карточки
addCardCloseButton.addEventListener('click', () => {popupClose(popupFormAddCard)});






