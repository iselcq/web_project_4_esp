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
const deleteButton = document.querySelector(".cards__remove");
//variables para modal de imagen
const closeImage = document.querySelector("#image-popup__close");
const imageForm = document.querySelector(".image-popup");
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

function closeImagePopUp() {
  imageForm.classList.remove("image-popup__opened");
}

closeImage.addEventListener("click", closeImagePopUp);

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

//funcion para crear tarjetas y like
cardData.forEach(addCard);

function addCard(element) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardTemplateClone = cardTemplate
    .querySelector(".cards__card")
    .cloneNode(true);
  const cardContainer = document.querySelector(".cards");
  const likeButton = cardTemplateClone.querySelector("#like-button");
  const removeButton = cardTemplateClone.querySelector("#remove-button");
  const popupImage = cardTemplateClone.querySelector(".cards__image");

  cardTemplateClone.querySelector(".cards__image").src = element.src;
  cardTemplateClone.querySelector(".cards__image").alt = element.alt;
  cardTemplateClone.querySelector(".cards__location").textContent =
    element.title;

  likeButton.addEventListener("click", likeSelected);

  removeButton.addEventListener("click", removeCard);

  popupImage.addEventListener("click", openImage);

  cardContainer.prepend(cardTemplateClone);
}

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

//funcion para poner y quitar like
function likeSelected(event) {
  if (
    event.target.className === "cards__like-button cards__like-button_active"
  ) {
    event.target.classList.remove("cards__like-button_active");
  } else {
    event.target.classList.add("cards__like-button_active");
  }
}

//funcion para remover tarjeta
function removeCard(event) {
  event.target.parentElement.remove();
}

//funcion para agrandar imagen
function openImage(event) {
  const imagePopUp = document.querySelector(".image-popup");
  const imageSelected = imagePopUp.querySelector(".image-popup__image");
  const imageTitle = imagePopUp.querySelector(".image-popup__title");

  imagePopUp.classList.add("image-popup__opened");
  imageSelected.src = event.target.src;
  imageSelected.alt = event.target.alt;
  imageTitle.innerText =
    event.target.parentElement.children[2].children[0].innerText;
}

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
