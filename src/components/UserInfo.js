// Класс отвечает за управление отображением информации о пользователе на странице

export class UserInfo {
  constructor({name, vocation}) {
    this._name = name;
    this._vocation = vocation;
  }

  // метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo() {
    return {
      name: this._name.textContent,
      vocation: this._vocation.textContent
    }
  }

  // метод принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(user) {
    this._name.textContent = user.name;
    this._vocation.textContent = user.vocation;
  }
}
