import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, deleteFunction) {
    super(popupSelector);
    this.deleteFunction = deleteFunction;
    //this.deleteCardBtn = this.popup.querySelector(".cards__remove");
  }

  open(event, id) {
    const deleteBtn = document.querySelector(`.${this.popupSelector}__submit`);
    deleteBtn.addEventListener("click", () => this.closeModal(event, id));
    this.popup.classList.add(`${this.popupSelector}__opened`);
  }

  closeModal(event, id) {
    this.deleteFunction(event, id);
    this.close();
  }
}
