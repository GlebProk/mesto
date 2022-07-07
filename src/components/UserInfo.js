// Класс отвечает за управление отображением информации о пользователе на странице
export class UserInfo {
  constructor({name, vocation, avatar, userId}) {
    this._name = name;
    this._vocation = vocation;
    this._avatar = avatar;
    this._userId = null;
  }

  // метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo() {
    return {
      name: this._name.textContent,
      vocation: this._vocation.textContent,
    }
  }

  // метод принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(user) {
    this._name.textContent = user.name;
    this._vocation.textContent = user.about;
    this._avatar.src = user.avatar;
    this._avatar.alt = `Фотография ${user.name}`;
  }

  getUserId(user) {
    this._userId = user._id;
  }

  addAvatar(user){
    this._avatar.src = user.avatar;
    this._avatar.alt = `Фотография ${user.name}`;
  }

}
