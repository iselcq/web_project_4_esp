import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

//variables para formulario editar profile
const formElement = document.querySelector(".pop-up");
const inputName = document.querySelector("#user-name");
const inputJob = document.querySelector("#user-profession");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const newCard = document.querySelector(".new-place");
const inputTitle = document.querySelector("#new-title");
const inputImage = document.querySelector("#new-url");
const cardContainer = document.querySelector(".cards");

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

function handleProfileSubmitForm(evt) {
  evt.preventDefault();

  const nameValue = inputName.value;
  const jobValue = inputJob.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  closePopUp();
}

formElement.addEventListener("submit", handleProfileSubmitForm); //Es lo mismo

function handleNewCardSubmitForm(evt) {
  evt.preventDefault();
  const titleValue = inputTitle.value;
  const imageValue = inputImage.value;
  const altValue = inputTitle.value;
  const addedCard = new Card(
    { src: imageValue, alt: altValue, title: titleValue },
    "#card-template"
  );
  closeCard();

  cardContainer.prepend(addedCard.generateCard());
}

newCard.addEventListener("submit", handleNewCardSubmitForm);

//clase Card
cardData.forEach((item) => {
  const currentCard = new Card(item, "#card-template");
  cardContainer.prepend(currentCard.generateCard());
});

//clase FormValidator Editar Perfil
const popupConfig = {
  formSelector: "#pop-up__form",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__submit",
  inactiveButtonClass: "pop-up__submit_disabled",
  inputErrorClass: "pop-up__input_error",
  errorClass: "pop-up__error_active",
};
const popupForm = document.querySelector(popupConfig.formSelector);

const popUpFormValidation = new FormValidator(popupConfig, popupForm);

popUpFormValidation.enableValidation();

//clase Formalidator Agregar Foto
const newCardConfig = {
  formSelector: "#new-place__form",
  inputSelector: ".new-place__input",
  submitButtonSelector: ".new-place__submit",
  inactiveButtonClass: "new-place__submit_disabled",
  inputErrorClass: "new-place__input_error",
  errorClass: "new-place__error_active",
};
const newCardForm = document.querySelector(newCardConfig.formSelector);

const newCardValidation = new FormValidator(newCardConfig, newCardForm);

newCardValidation.enableValidation();
