export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popup = document.querySelector(`.${this.popupSelector}`);
  }
  open() {
    this.popup.classList.add(`${this.popupSelector}__opened`);
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
  close() {
    this.popup.classList.remove(`${this.popupSelector}__opened`);
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const buttonClose = document.querySelector(`.${this.popupSelector}__close`);
    const outsidePopup = document.querySelector(`.${this.popupSelector}__card`);
    buttonClose.addEventListener("click", () => this.close());
    this.popup.addEventListener("click", () => this.close());
    outsidePopup.addEventListener("click", (evt) => {
      evt.stopPropagation();
    });
  }
}
