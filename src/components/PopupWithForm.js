// Класс дополняет родительский (Popup) при открытии формы

import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupElement) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = popupElement.querySelector('.popup__container');
    this._submitButton = this._form.querySelector('.popup__button-save');
    this._inputs = Array.from(this._form.querySelectorAll('.popup__item'))
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.id] = input.value;
  })
    return values;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if(isLoading) {
        this._submitButton.textContent = 'Сохранение...';
    } else {
        this._submitButton.textContent = 'Сохранить'
    }
}
}
