import { FormValidator } from '../components/FormValidator.js';
import { config } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithFormDelete } from '../components/PopupWithFormDelete.js';

const cardsSection = document.querySelector('.elements');

const popupFormProfile = document.querySelector('.popup_edit-profile');
const popupItemName = popupFormProfile.querySelector('.popup__item_field_name');
const popupItemVocation = popupFormProfile.querySelector('.popup__item_field_vocation');

const popupFormAddCard  = document.querySelector('.popup_add-card');

const popupCardImage = document.querySelector('.popup_card-image');

const profileInfoName = document.querySelector('.profile__name');
const profileInfoVocation = document.querySelector('.profile__vocation');
const profileAvatar = document.querySelector('.profile__image');

const editButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const editAvatar = document.querySelector('.profile__image-button');

const formAddCard = document.querySelector('#Add_Card');
const formEditProfile = document.querySelector('#Edit_Profile');
const formEditAvatar = document.querySelector('#Edit_Avatar');

const popupFormDeleteCard = document.querySelector('.popup_confirm-message');
const popupFormEditAvatar = document.querySelector('.popup_avatar');

// создаем экземпляры класса FormValidator
const validFormProfile = new FormValidator(config, formEditProfile);
const validFormAddCard = new FormValidator(config, formAddCard);
const validFormEditAvatar = new FormValidator(config, formEditAvatar);

// включаем валидацию форм
validFormProfile.enableValidation();
validFormAddCard.enableValidation();
validFormEditAvatar.enableValidation();

// Создаем экземпляр класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '5da3e556-d369-4c0e-9a2c-e2a83040763e',
    'Content-Type': 'application/json'
  }
});

Promise.all([
  api.getUserInfo(),
  api.getInitialCard()])
  .then(([user, cards]) => {
    // Добавляем данные о пользователе при загрузке страницы
    userId = user._id;
    profileInfo.setUserInfo(user);

    // Добавляем карточки с сервера при загрузке страницы
    const cardsList = new Section({
      renderer: (cardItem) => {
        cardsList.addItem(createCard(cardItem));
      }
    },
    cardsSection);

    cardsList.renderItems(cards);
  })
  .catch((err) => {
    console.log(`${err}`);
  })

// Создаем экземпляр класса UserInfo
let userId;
const profileInfo = new UserInfo({name: profileInfoName, vocation: profileInfoVocation, avatar: profileAvatar, userId});

// Создаем экземпляр класса PopupWithForm
// для формы редактирования профиля
const openPopupFormProfile = new PopupWithForm({
  handleFormSubmit: (data) => {
    openPopupFormProfile.renderLoading(true);
    api.patchUserInfo(data)
      .then((res) => {
        profileInfo.setUserInfo(res);
      })
      .catch((err) => {
        console.log(`Данные пользователя не были обновлены. Ошибка: ${err}`);
      })
      .finally(() => {
        openPopupFormProfile.renderLoading(false);
      })
  }
},
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

// Создаем экземпляр класса PopupWithForm
// для формы редактирования аватарки
const popupEditAvatarForm = new PopupWithForm({
  handleFormSubmit: (data) => {
    popupEditAvatarForm.renderLoading(true);
    api.editAvatar({
      avatar: data.link
    })
    .then((data) => {
      profileInfo.addAvatar(data);
      popupEditAvatarForm.close()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupEditAvatarForm.renderLoading(false);
    })
  }
}, popupFormEditAvatar);

popupEditAvatarForm.setEventListeners();

// Открытие формы редактирования аватарки
editAvatar.addEventListener('click', () => {
  formEditAvatar.reset();
  validFormEditAvatar.hideSpan();
  popupEditAvatarForm.open();
})


// Функция создания карточки
function createCard(item) {

  // создаем экземпляр класса Card
  const card = new Card (
  { item: item,
    handleCardClick: (link, name) => {
      popupCardImageOpen.open(link, name);
    },

    handleDeleteCard: (cardId) => {
      deleteCardForm.open();
      deleteCardForm.setFormSubmit(() => {
        deleteCardForm.renderLoading(true);
        api.deleteCard(cardId)
        .then((res) => {
          deleteCardForm.close()
          card.deleteCard(res)
        })
        .catch((err) => {
          console.log(`Карточка не была удалена. Ошибка: ${err}`)
        })
        .finally(() => {
          deleteCardForm.renderLoading(false);
        })
      })
    },

    handleLikeClick: (cardId) => {
      if (card.isLiked()) {
        api.deleteLike(card.returnCardId())
        .then((res) => {
          console.log(res._id);
          card.deleteLike(res._id);
          card.countLike(res.likes)
        })
        .catch((err) => {
          console.log(`ошибка удаления лайка ${err}`)
        })
      } else {
        api.putLike(card.returnCardId())
        .then((res) => {
          console.log(res._id);
          card.addLike(res._id);
          card.countLike(res.likes)
        })
        .catch((err) => {
          console.log(`ошибка добавления лайка ${err}`)
        })
      }
    },
  }, userId, '#card');

  // передаем готовую карточку к публикации
  const cardElement = card.createCard();

  return cardElement;
}

// Создаем экземпляр класса PopupWithImage
// для формы с картинкой
const popupCardImageOpen = new PopupWithImage(popupCardImage);
popupCardImageOpen.setEventListeners();


// Создаем экземпляр класса PopupWithForm
// для формы добавления новой карточки
const openPopupFormAddCard = new PopupWithForm({
  handleFormSubmit: (data) => {
    openPopupFormAddCard.renderLoading(true);
    api.postNewCard({
      name: data.name,
      link: data.link,
    })
    .then((data) => {
      popupAddCard.renderItems([data]);
    })
    .finally(() => {
      openPopupFormAddCard.renderLoading(false);
    })
}},
popupFormAddCard)

openPopupFormAddCard.setEventListeners();

// Открытие формы добавления новой карточки
addCardButton.addEventListener('click', () => {
  formAddCard.reset();
  validFormAddCard.hideSpan();
  openPopupFormAddCard.open();
});

// Создаем экземпляр класса Section
// для добавления новой карточки на страницу
const popupAddCard = new Section({
  renderer: (cardItem) => {
    popupAddCard.addItem(createCard(cardItem));
  }
},
cardsSection);

// Создаем экземпляр класса PopupWithFormDelete
// для формы при удалении карточки
const deleteCardForm = new PopupWithFormDelete(popupFormDeleteCard);
deleteCardForm.setEventListeners();
