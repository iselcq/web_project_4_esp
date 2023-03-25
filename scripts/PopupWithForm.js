import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this.submitFunction = submitFunction;
    this.inputs = this.popup.querySelectorAll("input");
  }
  _getInputValues() {
    const inputValues = [];
    this.inputs.forEach((input) => inputValues.push(input.value));
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.submitFunction(evt, this._getInputValues());
      this.close();
    });
  }

  close() {
    this.inputs.forEach((input) => (input.value = ""));
    super.close();
  }
}
