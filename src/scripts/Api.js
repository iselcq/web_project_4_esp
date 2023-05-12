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
}
