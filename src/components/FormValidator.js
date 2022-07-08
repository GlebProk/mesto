import { config } from '../utils/constants.js'

class FormValidator {
  constructor(config, formItem) {
    this._formSelector = config.formSelector;
    this._inputSpanError = config.inputSpanError;
    this._inputSelector = config.inputSelector;
    this._errorClass = config.errorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;

    this._formItem = formItem;

    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    this._inputList = Array.from(this._formItem.querySelectorAll(this._inputSelector));

    this._sumbitButton = this._formItem.querySelector(this._submitButtonSelector);
  }

  // функция очищает ошибки для полей ввода
  hideSpan() {
    this._toggleButtonState();

    const spanList = Array.from( this._formItem.querySelectorAll(this._inputSpanError));

    spanList.forEach((span) => {
      span.classList.remove(this._errorClass);
    });
    this._inputList.forEach((input) => {
      input.classList.remove(this._inputErrorClass);
    });
  }

  // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formItem.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;

    // Показываем сообщение об ошибке
    errorElement.classList.add(this._errorClass);
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._formItem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);

    // Скрываем сообщение об ошибке
    errorElement.classList.remove(this._errorClass);

    errorElement.textContent = '';
  };

  // Функция, которая проверяет валидность поля
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);
      }
  };

  // Функция принимает массив полей
  _hasInvalidInput(inputList) {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
    })
  };

  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  _toggleButtonState() {

    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(this._inputList)) {
      // сделай кнопку неактивной
      this._sumbitButton.classList.add(this._inactiveButtonClass);
      this._sumbitButton.setAttribute("disabled", "");
    } else {
      // иначе сделай кнопку активной
      this._sumbitButton.classList.remove(this._inactiveButtonClass);
      this._sumbitButton.removeAttribute("disabled", "");
    }
  };

  _setEventListeners() {
    // У формы отменим стандартное поведение
    this._formItem.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._toggleButtonState();

    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };


  enableValidation() {
    // Для формы вызовем функцию setEventListeners
    this._setEventListeners();
  };
}

export {config, FormValidator};
