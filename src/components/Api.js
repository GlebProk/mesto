export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Метод получения информации о профиле пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
      return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  // Метод получения карточек при открытии страницы
  getInitialCard() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
      return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  // Метод обновления информации о профиле пользователя
  patchUserInfo(item) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        about: item.vocation
      })
    })
    .then(res => {
      if (res.ok) {
      return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  // Метод добавления созданной пользователем карточки
  postNewCard(item) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      })
    })
    .then(res => {
      if (res.ok) {
      return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

  }

  // Метод удаления карточки
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
      return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  };


  // Метод постановки лайка на карточке
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  };

  // Метод удаления лайка на карточке
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  };

  // Метод для редактирования аватарки пользователя
  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
          avatar: data.avatar
      })
    })
    .then((res) => {
      console.log(data);
      if (res.ok) {
        return res.json();
      }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  };

};
