const buttonOpen = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".pop-up__close");
const btnNewCard = document.querySelector("#add-button");
const newCardClose = document.querySelector(".new-place__close");
const newCard = document.querySelector(".new-place");
const formElement = document.querySelector(".pop-up");
const imagePopup = document.querySelector(".image-popup");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector("#user-name");
const profileJob = document.querySelector(".profile__profession");
const inputJob = document.querySelector("#user-profession");
const popupElement = document.querySelector(".pop-up__card");
const cardElement = document.querySelector(".new-place__card");
const imageElement = document.querySelector(".image-popup__section");
//funciones para abrir y cerrar modal para nueva tarjeta
function newCardOpen() {
  newCard.classList.add("new-place__opened");
}

function closeCard() {
  newCard.classList.remove("new-place__opened");
}

newCardClose.addEventListener("click", closeCard);
btnNewCard.addEventListener("click", newCardOpen);

//funciones para editar perfil
function openPopUp() {
  formElement.classList.add("pop-up__opened");
  const name = profileName.textContent;
  inputName.value = name;
  const profession = profileJob.textContent;
  inputJob.value = profession;
}

function closePopUp() {
  formElement.classList.remove("pop-up__opened");
}

buttonOpen.addEventListener("click", openPopUp);
buttonClose.addEventListener("click", closePopUp);

//funcion para cerrar imagen
function closeImage() {
  imagePopup.classList.remove("image-popup__opened");
}

//cerrar modales con tecla "esc"
document.addEventListener(
  "keydown",
  function (evt, formElement, newCard, imagePopup) {
    if (evt.key === "Escape") {
      closePopUp(formElement);
      closeCard(newCard);
      closeImage(imagePopup);
    }
  }
);

// //cerrar modales con un click fuera del area
formElement.addEventListener("click", function (popupElement) {
  closePopUp(popupElement);
});

popupElement.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

//cerrar modal con un click fuera del area
newCard.addEventListener("click", function (newCard) {
  closeCard(newCard);
});

cardElement.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

//cerrar modal imagen con un click fuera del area
imagePopup.addEventListener("click", function (imagePopup) {
  closeImage(imagePopup);
});
imageElement.addEventListener("click", (evt) => {
  evt.stopPropagation();
});
