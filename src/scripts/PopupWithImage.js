import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imageSelected = this.popup.querySelector(".image-popup__image");
    this.imageTitle = this.popup.querySelector(".image-popup__title");
  }

  open(event) {
    this.popup.classList.add(`${this.popupSelector}__opened`);
    this.imageSelected.src = event.target.src;
    this.imageSelected.alt = event.target.alt;
    this.imageTitle.innerText =
      event.target.parentElement.children[2].children[0].innerText;
  }
}
