export default class Api {
  constructor(options) {}
  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/web_es_05/cards", {
      headers: {
        authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
      },
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getUserInfo() {
    return fetch("https://around.nomoreparties.co/v1/web_es_05/users/me", {
      headers: {
        authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
      },
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  editUserInfo(name, about) {
    return fetch("https://around.nomoreparties.co/v1/web_es_05/users/me", {
      method: "PATCH",
      headers: {
        authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  editUserAvatar(avatar) {
    return fetch(
      "https://around.nomoreparties.co/v1/web_es_05/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar,
        }),
      }
    ).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  addNewCard(name, link) {
    return fetch("https://around.nomoreparties.co/v1/web_es_05/cards", {
      method: "POST",
      headers: {
        authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  deleteCard(id) {
    return fetch(`https://around.nomoreparties.co/v1/web_es_05/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
      },
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  likeAndUnlike(id, action) {
    return fetch(
      `https://around.nomoreparties.co/v1/web_es_05/cards/likes/${id}`,
      {
        method: action,
        headers: {
          authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
