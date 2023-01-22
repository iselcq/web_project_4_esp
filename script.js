let buttonOpen = document.querySelector(".profile__edit-button");
let formElement = document.querySelector(".pop-up");
let buttonClose = document.querySelector(".pop-up__close");

let buttonSubmit = document.querySelector("pop-up__submit");
let inputName = document.querySelector("#user-name");
let inputJob = document.querySelector("#user-profession");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__profession");

function openPopUp() {
  const name = profileName.textContent;
  inputName.value = name;
  const profession = profileJob.textContent;
  inputJob.value = profession;
  formElement.classList.add("pop-up__opened");
}

function closePopUp() {
  formElement.classList.remove("pop-up__opened");
}

buttonOpen.addEventListener("click", openPopUp);
buttonClose.addEventListener("click", closePopUp);

function handleProfileSubmitForm(evt) {
  evt.preventDefault();

  let nameValue = inputName.value;
  let jobValue = inputJob.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  closePopUp();
}

formElement.addEventListener("submit", handleProfileSubmitForm); //Es lo mismo
