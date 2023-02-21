const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  configObject
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(configObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configObject.errorClass);
};

const hideInputError = (formElement, inputElement, configObject) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(configObject.inputErrorClass);
  errorElement.classList.remove(configObject.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, configObject) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configObject
    );
  } else {
    hideInputError(formElement, inputElement, configObject);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const setEventListeners = (formElement, configObject) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configObject.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configObject);
    });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        const submitBtn = formElement.querySelector(
          configObject.submitButtonSelector
        );
        const invalidInput = hasInvalidInput(inputList);
        if (invalidInput) {
          console.log("invalido");
          submitBtn.classList.add(configObject.inactiveButtonClass);
        } else {
          console.log("valido");
          submitBtn.classList.remove(configObject.inactiveButtonClass);
        }
      });
    });
  });
};

const enableValidation = (configObject) => {
  const formList = Array.from(
    document.querySelectorAll(configObject.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, configObject);
  });
};

const popupConfig = {
  formSelector: "#pop-up__form",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__submit",
  inactiveButtonClass: "pop-up__submit_disabled",
  inputErrorClass: "pop-up__input_error",
  errorClass: "pop-up__error_active",
};

const newCardConfig = {
  formSelector: "#new-place__form",
  inputSelector: ".new-place__input",
  submitButtonSelector: ".new-place__submit",
  inactiveButtonClass: "new-place__submit_disabled",
  inputErrorClass: "new-place__input_error",
  errorClass: "new-place__error_active",
};

enableValidation(popupConfig);
enableValidation(newCardConfig);
