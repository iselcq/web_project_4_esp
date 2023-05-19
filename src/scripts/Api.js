export default class Api {
  constructor(options) {}

  _fetchData(url, options) {
    return fetch(`${process.env.BASE_URL}/${url}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`{Error: ${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  getInitialCards() {
    return this._fetchData("cards", {
      headers: {
        authorization: process.env.API_KEY,
      },
      method: "GET",
    });
  }

  getUserInfo() {
    return this._fetchData("users/me", {
      headers: {
        authorization: process.env.API_KEY,
      },
      method: "GET",
    });
  }
  editUserInfo(name, about) {
    return this._fetchData("users/me", {
      method: "PATCH",
      headers: {
        authorization: process.env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }
  editUserAvatar(avatar) {
    return this._fetchData("users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: process.env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
      }),
    });
  }
  addNewCard(name, link) {
    return this._fetchData("cards", {
      method: "POST",
      headers: {
        authorization: process.env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }
  deleteCard(id) {
    return this._fetchData(`cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: process.env.API_KEY,
      },
    });
  }
  likeAndUnlike(id, action) {
    return this._fetchData(`cards/likes/${id}`, {
      method: action,
      headers: {
        authorization: process.env.API_KEY,
        "Content-Type": "application/json",
      },
    });
  }
}
