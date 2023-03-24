export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popup = document.querySelector(`.${this.popupSelector}`);
  }
  open() {
    this.popup.classList.add(`${this.popupSelector}__opened`);
  }
  close() {
    this.popup.classList.remove(`${this.popupSelector}__opened`);
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
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    this.popup.addEventListener("click", () => this.close());
    outsidePopup.addEventListener("click", (evt) => {
      evt.stopPropagation();
    });
  }
}
