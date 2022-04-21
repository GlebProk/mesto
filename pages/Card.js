import { openPopup } from "./index.js";

const popupCardImage = document.querySelector('.popup_card-image');
const popupFormImage = popupCardImage.querySelector('.popup__image');
const popupFormFigcaption = popupCardImage.querySelector('.popup__figcaption');

export class Card {
  constructor(link, name, templateId) {
    this._link = link;
    this._name = name;
    this._templateId = templateId;
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

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    // добавляем возможность ставить лайк
    this._element.querySelector('.elements__heart').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__heart_active');});

    // добавляем возможность удалить карточку
    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._element.remove();});

    // добавляем возможность открыть фото из карточки
    this._element.querySelector('.elements__button-image').addEventListener('click', () => {
      popupFormImage.src = this._link;
      popupFormImage.alt = this._name;
      popupFormFigcaption.textContent = this._name;
      openPopup(popupCardImage);
    });
  }
}


