//variables para formulario editar profile
const formElement = document.querySelector(".pop-up");
const buttonOpen = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonClose = document.querySelector(".pop-up__close");
const buttonSubmit = document.querySelector(".pop-up__submit");
const inputName = document.querySelector("#user-name");
const inputJob = document.querySelector("#user-profession");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
//variables para formulario de nueva tarjeta
const btnNewCard = document.querySelector("#add-button");
const newCardClose = document.querySelector(".new-place__close");
const newCardSubmit = document.querySelector(".new-place__submit");
const newCard = document.querySelector(".new-place");

//funciones para editar perfil
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

  const nameValue = inputName.value;
  const jobValue = inputJob.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  closePopUp();
}

formElement.addEventListener("submit", handleProfileSubmitForm); //Es lo mismo

//funciones para agregar nueva tarjeta
function newCardOpen() {
  newCard.classList.add("new-place__opened");
}

function closeCard() {
  newCard.classList.remove("new-place__opened");
}

newCardClose.addEventListener("click", closeCard);
btnNewCard.addEventListener("click", newCardOpen);
