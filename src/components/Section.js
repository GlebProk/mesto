// Класс отвечает за отрисовку элементов на странице,
// получает разметку через функцию-колбэк и вставляет её в контейнер.

export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer; //функция из index.js которая создает экземпляры карточек и вставляет в разметку
    this._container = containerSelector;
  }

  renderItems(arr) {
    arr.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
