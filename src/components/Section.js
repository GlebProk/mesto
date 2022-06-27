// Класс отвечает за отрисовку элементов на странице,
// получает разметку через функцию-колбэк и вставляет её в контейнер.

export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer; //функция из index.js которая создает экземпляры карточек и вставляет в разметку
    this._container = containerSelector;
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
