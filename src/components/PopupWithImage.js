// Класс перезаписывает родительский (класс Popup) метод open

import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
  open(name, link){
    const popupFormImage = this._popupSelector.querySelector('.popup__image');
    const popupFormFigcaption = this._popupSelector.querySelector('.popup__figcaption');

    popupFormImage.src = link;
    popupFormImage.alt = name;
    popupFormFigcaption.textContent = name;

    super.open();
  }
}
