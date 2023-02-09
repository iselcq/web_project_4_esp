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
const newCardTitle = document.querySelector(".cards__location");
const newCardImage = document.querySelector(".cards__image");
const inputTitle = document.querySelector("#new-title");
const inputImage = document.querySelector("#new-url");

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

//funciones para agregar nueva tarjeta
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

  newCardTitle.textContent = titleValue;
  newCardImage.textContent = imageValue;
  closeCard();
}

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
    src: "images/kilauea.jpg",
    alt: "Imagen de la erupción en el volcán Kilauea",
    title: "Volcán Kilauea",
  },
  {
    src: "images/bodieIsland.jpg",
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

cardData.forEach((element) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardTemplateClone = cardTemplate
    .querySelector(".cards__card")
    .cloneNode(true);
  const cardContainer = document.querySelector(".cards");

  cardTemplateClone.querySelector(".cards__image").src = element.src;
  cardTemplateClone.querySelector(".cards__image").alt = element.alt;
  cardTemplateClone.querySelector(".cards__location").textContent =
    element.title;

  cardContainer.append(cardTemplateClone);
});
