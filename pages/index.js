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

const popups = document.querySelectorAll('.popup');

const popupFormProfile = document.querySelector('.popup_edit-profile');
const popupItemName = popupFormProfile.querySelector('.popup__item_field_name');
const popupItemVocation = popupFormProfile.querySelector('.popup__item_field_vocation');

const popupFormAddCard = document.querySelector('.popup_add-card');
const saveCardButton = popupFormAddCard.querySelector('.popup__button-save');
const popupItemMesto = popupFormAddCard.querySelector('.popup__item_field_mesto');
const popupItemLink = popupFormAddCard.querySelector('.popup__item_field_link');

const profileInfoName = document.querySelector('.profile__name');
const profileInfoVocation = document.querySelector('.profile__vocation');

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const popupCardImage = document.querySelector('.popup_card-image');
const popupFormImage = popupCardImage.querySelector('.popup__image');
const popupFormFigcaption = popupCardImage.querySelector('.popup__figcaption');

const formAddCard = document.querySelector('#Add_Card');

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
  hideSpan(config);
  toggleButtonState(popupFormProfile, config);
  openPopup(popupFormProfile);
}

function saveProfile(evt) {
  evt.preventDefault();
  profileInfoName.innerText = popupItemName.value;
  profileInfoVocation.innerText = popupItemVocation.value;
  closePopup(popupFormProfile);
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
    popupFormImage.src = link;
    popupFormImage.alt = name;
    popupFormFigcaption.textContent = name;
    openPopup(popupCardImage);
  });
  return cardElement;
}

// добавляем 6 карточек из начального массива при загрузке страницы
initialCards.forEach((item) => {
  cardsSection.append(createCard(item.link, item.name));
});

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

// открываем форму добавления новой карточки
addCardButton.addEventListener('click', () => {
  formAddCard.reset();
  hideSpan(config);
  toggleButtonState(popupFormAddCard, config);
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
