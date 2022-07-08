export class Card {
  constructor({ item, handleCardClick, handleDeleteCard, handleLikeClick }, userId, templateId) {
    this._link = item.link;
    this._name = item.name;
    this._likes = item.likes;
    this._ownerid = item.owner._id;
    this._userId = userId;
    this._cardId = item._id;
    this._templateId = templateId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeClick = handleLikeClick;
    this._isLiked = this._likes.some((like) => like._id == this._userId);
  }

  // клонируем шаблон для карточки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateId)
    .content
    .querySelector('.elements__element')
    .cloneNode(true);

    return cardElement;
  }

  // присваиваем значения элементам карточки
  createCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    this._element.querySelector('.elements__counter').textContent = this._likes.length;

    this._checkIdcard();
    this._checkLike();
    this._setEventListeners();

    return this._element;
  }

  _checkIdcard() {
    if (this._ownerid !== this._userId) {
      this._element.querySelector('.elements__trash').classList.add('elements__trash_hidden')
    } else {
      this._element.querySelector('.elements__trash').classList.remove('elements__trash_hidden')
    }
  };

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  isLiked() {
    return this._isLiked;
  };

  returnCardId () {
    return this._cardId
  };

  addLike() {
    this._element.querySelector('.elements__heart').classList.add('elements__heart_active');
    this._element.querySelector('.elements__counter').textContent = this._likes.length;
    this._isLiked = true;
  };

  deleteLike() {
    this._element.querySelector('.elements__heart').classList.remove('elements__heart_active');
    this._element.querySelector('.elements__counter').textContent = this._likes.length;
    this._isLiked = false;
  };

  countLike(likes) {
    this._element.querySelector('.elements__counter').textContent = likes.length;
  };

  _checkLike() {
    if(this._isLiked) {
        this.addLike();
    } else {
        this.deleteLike()
    }
  }

  _setEventListeners() {
    // добавляем возможность ставить лайк
    this._element.querySelector('.elements__heart').addEventListener('click', (evt) => {
      this._handleLikeClick(this._cardId)});

    // добавляем возможность удалить карточку
    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleDeleteCard(this._cardId)});

    // добавляем возможность открыть фото из карточки
    this._element.querySelector('.elements__button-image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}

