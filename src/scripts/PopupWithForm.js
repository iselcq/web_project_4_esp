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

  setInputValues(name, job) {
    this.inputs[0].value = name;
    this.inputs[1].value = job;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.submitFunction(this._getInputValues());
      this.close();
    });
  }

  close() {
    this.inputs.forEach((input) => (input.value = ""));
    super.close();
  }
}
