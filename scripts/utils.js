import Popup from "./Popup.js";

const buttonOpen = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".pop-up__close");
const btnNewCard = document.querySelector("#add-button");
// const newCardClose = document.querySelector(".new-place__close");
const newCard = document.querySelector(".new-place");
const formElement = document.querySelector(".pop-up");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector("#user-name");
const profileJob = document.querySelector(".profile__profession");
const inputJob = document.querySelector("#user-profession");
const popupElement = document.querySelector(".pop-up__card");
const cardElement = document.querySelector(".new-place__card");

//funciones para abrir y cerrar modal para nueva tarjeta

const newAddCard = new Popup("new-place");
newAddCard.setEventListeners();
btnNewCard.addEventListener("click", () => newAddCard.open());

const addProfile = new Popup("pop-up");
addProfile.setEventListeners();
buttonOpen.addEventListener("click", () => addProfile.open());

//funciones para editar perfil
// function openPopUp() {
//   formElement.classList.add("pop-up__opened");
//   const name = profileName.textContent;
//   inputName.value = name;
//   const profession = profileJob.textContent;
//   inputJob.value = profession;
// }

// function closePopUp() {
//   formElement.classList.remove("pop-up__opened");
// }

// buttonOpen.addEventListener("click", openPopUp);
// buttonClose.addEventListener("click", closePopUp);

// //cerrar modales con tecla "esc"
// document.addEventListener("keydown", function (evt, formElement, newCard) {
//   if (evt.key === "Escape") {
//     closePopUp(formElement);
//     closeCard(newCard);
//   }
// });

// // //cerrar modales con un click fuera del area
// formElement.addEventListener("click", function (popupElement) {
//   closePopUp(popupElement);
// });

// popupElement.addEventListener("click", (evt) => {
//   evt.stopPropagation();
// });

// //cerrar modal con un click fuera del area

// newCard.addEventListener("click", function (newCard) {
//   closeCard(newCard);
// });

// cardElement.addEventListener("click", (evt) => {
//   evt.stopPropagation();
// });
