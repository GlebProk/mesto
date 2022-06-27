//Класс отвечает за открытие и закрытие попапа

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeMethod = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeMethod);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeMethod);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }


  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
        this.close();}
      });
  }
}
