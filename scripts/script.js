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

const inputTitle = document.querySelector("#new-title");
const inputImage = document.querySelector("#new-url");
//variables para modal de imagen

//variables para cerrar con esc o click fuera del modal
const popupElement = document.querySelector(".pop-up__card");
const cardElement = document.querySelector(".new-place__card");

//6 tarjetas
const cardData = [
  {
    src: "images/cannonBeach.png",
    alt: "Imagen de Cannon Beach con una gran roca al fondo",
    title: "Cannon Beach",
  },
  {
    src: "images/whiteSands.png",
    alt: "Imagen de un campo de dunas blancas en Nuevo Mexico",
    title: "White Sands",
  },
  {
    src: "images/kilauea.png",
    alt: "Imagen de la erupción en el volcán Kilauea",
    title: "Volcán Kilauea",
  },
  {
    src: "images/bodieIsland.png",
    alt: "Imagen del Faro de Bodie Island encendido",
    title: "Bodie Island Lighthouse",
  },
  {
    src: "images/antelopeCanyon.png",
    alt: "Imagen dentro de los cañones de ranura en Arizona",
    title: "Cañón del Antílope",
  },
  {
    src: "images/haleakala.png",
    alt: "Imagen de la cima del volcán Haleakala con niebla",
    title: "Haleakalā",
  },
];

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

function handleProfileSubmitForm(evt) {
  evt.preventDefault();

  const nameValue = inputName.value;
  const jobValue = inputJob.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  closePopUp();
}

formElement.addEventListener("submit", handleProfileSubmitForm); //Es lo mismo

//funciones para abrir y cerrar modal para nueva tarjeta
function newCardOpen() {
  newCard.classList.add("new-place__opened");
}

function closeCard() {
  newCard.classList.remove("new-place__opened");
}

newCardClose.addEventListener("click", closeCard);
btnNewCard.addEventListener("click", newCardOpen);

function handleNewCardSubmitForm(evt) {
  evt.preventDefault();
  const titleValue = inputTitle.value;
  const imageValue = inputImage.value;
  const altValue = inputTitle.value;
  addCard({ src: imageValue, alt: altValue, title: titleValue });
  closeCard();
}
newCard.addEventListener("submit", handleNewCardSubmitForm);

//cerrar modales con tecla "esc"
document.addEventListener("keydown", function (evt, formElement, newCard) {
  if (evt.key === "Escape") {
    closePopUp(formElement);
    closeCard(newCard);
  }
});

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

import Card from "./Card.js";

const cardContainer = document.querySelector(".cards");

cardData.forEach((item) => {
  const currentCard = new Card(item, "#card-template");
  cardContainer.prepend(currentCard.generateCard());
});
