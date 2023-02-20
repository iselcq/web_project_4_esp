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

enableValidation(popupConfig);
