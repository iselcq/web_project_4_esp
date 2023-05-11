import FormValidator from "./scripts/FormValidator.js";
import Card from "./scripts/Card.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";
import "./styles/index.css";
import Api from "./scripts/Api.js";

const buttonOpen = document.querySelector(".profile__edit-button");
const btnNewCard = document.querySelector("#add-button");
const btnProfileImg = document.querySelector(".profile__avatar-edit");

const montanasCalvas = require("./images/cannonBeach.png");
const whiteSands = require("./images/whiteSands.png");
const kilauea = require("./images/kilauea.png");
const haleakala = require("./images/haleakala.png");
const bodie = require("./images/bodieIsland.png");
const antelope = require("./images/antelopeCanyon.png");

// const api = new Api({
//   baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_05",
//   headers: {
//     authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
//     "Content-Type": "application/json",
//   },
// });

// api.getInitialCards();
// api.getUserInfo();

//6 tarjetas
const cardData = [
  {
    src: montanasCalvas,
    alt: "Imagen de Cannon Beach con una gran roca al fondo",
    title: "Cannon Beach",
  },
  {
    src: whiteSands,
    alt: "Imagen de un campo de dunas blancas en Nuevo Mexico",
    title: "White Sands",
  },
  {
    src: kilauea,
    alt: "Imagen de la erupción en el volcán Kilauea",
    title: "Volcán Kilauea",
  },
  {
    src: bodie,
    alt: "Imagen del Faro de Bodie Island encendido",
    title: "Bodie Island Lighthouse",
  },
  {
    src: antelope,
    alt: "Imagen dentro de los cañones de ranura en Arizona",
    title: "Cañón del Antílope",
  },
  {
    src: haleakala,
    alt: "Imagen de la cima del volcán Haleakala con niebla",
    title: "Haleakalā",
  },
];

const newUserInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__profession",
  userImgSelector: ".profile__avatar",
});

function handleProfileSubmitForm(formInputValues) {
  const nameValue = formInputValues[0];
  const jobValue = formInputValues[1];
  newUserInfo.setUserInfo(nameValue, jobValue);
  return newUserInfo;
}

function handleNewCardSubmitForm(formInputValues) {
  const titleValue = formInputValues[0];
  const imageValue = formInputValues[1];
  const newCardData = { src: imageValue, alt: titleValue, title: titleValue };

  const newCardSection = new Section(
    { items: [newCardData], renderFunction: cardRenderer },
    ".cards"
  );
  newCardSection.renderer();
}

function handleProfileImgSubmitForm(formInputValues) {
  const imgValue = formInputValues[0];
  newUserInfo.setUserImg(imgValue);
  return newUserInfo;
}

//clase abrir imagen
const popupPhoto = new PopupWithImage("image-popup");
popupPhoto.setEventListeners();

//clase Card
function cardRenderer(item) {
  const currentCard = new Card(item, "#card-template", openSelectedImage);
  return currentCard.generateCard();
}
//clase Section
const cardSection = new Section(
  { items: cardData, renderFunction: cardRenderer },
  ".cards"
);
cardSection.renderer();

function openSelectedImage(event) {
  popupPhoto.open(event);
}
const newAddCard = new PopupWithForm("new-place", handleNewCardSubmitForm);
newAddCard.setEventListeners();
btnNewCard.addEventListener("click", () => {
  newAddCard.open();
});

const addProfile = new PopupWithForm("pop-up", handleProfileSubmitForm);
addProfile.setEventListeners();
buttonOpen.addEventListener("click", () => {
  const userInfo = newUserInfo.getUserInfo();
  addProfile.setInputValues(userInfo.name, userInfo.job);
  addProfile.open();
});

const addProfileImg = new PopupWithForm(
  "profile-pic",
  handleProfileImgSubmitForm
);
addProfileImg.setEventListeners();
btnProfileImg.addEventListener("click", () => {
  addProfileImg.open();
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

//clase FormValidator Agregar Foto
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

//clase FormValidator Editar Perfil
const profileImgConfig = {
  formSelector: "#profile-pic__form",
  inputSelector: ".profile-pic__input",
  submitButtonSelector: ".profile-pic__submit",
  inactiveButtonClass: "profile-pic__submit_disabled",
  inputErrorClass: ".profile-pic__input_error",
  errorClass: ".profile-pic__error_active",
};
const profileImgForm = document.querySelector(profileImgConfig.formSelector);

const profileImgFormValidation = new FormValidator(
  profileImgConfig,
  profileImgForm
);

profileImgFormValidation.enableValidation();