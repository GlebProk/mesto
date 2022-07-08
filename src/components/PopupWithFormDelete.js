import { Popup } from "./Popup.js"

export class PopupWithFormDelete extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = popupElement.querySelector('.popup__container');
    this._submitButton = this._form.querySelector('.popup__button-save');
  }

  setFormSubmit(callbackForm) {
    this.callbackForm = callbackForm;
}

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.callbackForm();
  });
    super.setEventListeners();
  }

  renderLoading(isLoading) {
    if (isLoading) {
        this._submitButton.textContent = 'Сохранение...';
    } else {
        this._submitButton.textContent = 'Да'
    }
  }
}
