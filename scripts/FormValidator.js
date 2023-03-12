class FormValidator {
  constructor(configObject, formElement) {
    this.configObject = configObject;
    this.formElement = formElement;
    this.inputList = [];
  }
  _setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.configObject.inputSelector)
    );
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
      });
      this.inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          const submitBtn = this.formElement.querySelector(
            this.configObject.submitButtonSelector
          );
          const invalidInput = this._hasInvalidInput();
          if (invalidInput) {
            submitBtn.classList.add(this.configObject.inactiveButtonClass);
          } else {
            submitBtn.classList.remove(this.configObject.inactiveButtonClass);
          }
        });
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this.configObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.configObject.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this.configObject.inputErrorClass);
    errorElement.classList.remove(this.configObject.errorClass);
    errorElement.textContent = "";
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this.formElement, this.configObject);
  }
}

export default FormValidator;
