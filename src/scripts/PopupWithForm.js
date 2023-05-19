import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this.submitBtn = this.popup.querySelector(`.${this.popupSelector}__submit`);
    this.submitFunction = submitFunction;
    this.inputs = this.popup.querySelectorAll("input");
  }
  _getInputValues() {
    const inputValues = [];
    this.inputs.forEach((input) => inputValues.push(input.value));
    return inputValues;
  }

  setSubmitBtnName(name) {
    this.submitBtn.textContent = name;
  }

  setInputValues(name, job) {
    this.inputs[0].value = name;
    this.inputs[1].value = job;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", (evt) => {
      const btnPrevName = this.submitBtn.textContent;
      evt.preventDefault();
      this.setSubmitBtnName("Guardando...");
      this.submitFunction(this._getInputValues())
        .then(() => {
          this.close();
        })
        .catch((res) => {
          console.log(res);
        })
        .finally(() => {
          this.setSubmitBtnName(btnPrevName);
        });
    });
  }

  close() {
    this.inputs.forEach((input) => (input.value = ""));
    super.close();
  }
}
