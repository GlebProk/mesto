// Класс дополняет родительский (Popup) при открытии формы

import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupElement) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = popupElement.querySelector('.popup__container');
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
    this._form.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
