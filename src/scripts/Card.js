class Card {
  constructor(cardData, templateSelector, popupInstance) {
    (this.cardData = cardData), (this.templateSelector = templateSelector);
    this._generateTemplate();
    this.popupInstance = popupInstance;
  }

  _generateTemplate() {
    const cardTemplate = document.querySelector(this.templateSelector).content;
    const cardTemplateClone = cardTemplate
      .querySelector(".cards__card")
      .cloneNode(true);
    this.cardTemplateClone = cardTemplateClone;
  }

  _setCardProperties() {
    this.likeButton = this.cardTemplateClone.querySelector("#like-button");
    this.removeButton = this.cardTemplateClone.querySelector("#remove-button");
    this.popupImage = this.cardTemplateClone.querySelector(".cards__image");
    this.closeImage = document.querySelector("#image-popup__close");
  }

  _detectEvt() {
    this.removeButton.addEventListener("click", this.handleRemove);
    this.likeButton.addEventListener("click", this.handleLike);
    this.popupImage.addEventListener("click", (evt) =>
      this.handleCardClick(evt)
    );
    // this.closeImage.addEventListener("click", this.handleCloseImage);
  }

  handleLike(event) {
    if (
      event.target.className === "cards__like-button cards__like-button_active"
    ) {
      event.target.classList.remove("cards__like-button_active");
    } else {
      event.target.classList.add("cards__like-button_active");
    }
  }
  handleRemove(event) {
    event.target.parentElement.remove();
  }

  handleNewCardSubmitForm(event) {
    event.preventDefault();
    const inputTitle = document.querySelector("#new-title");
    const inputImage = document.querySelector("#new-url");

    this.titleValue = inputTitle.value;
    this.imageValue = inputImage.value;
    this.altValue = inputTitle.value;
  }
  handleCardClick(event) {
    this.popupInstance.open(event);
  }

  generateCard() {
    this.cardTemplateClone.querySelector(".cards__image").src =
      this.cardData.src;
    this.cardTemplateClone.querySelector(".cards__image").alt =
      this.cardData.alt;
    this.cardTemplateClone.querySelector(".cards__location").textContent =
      this.cardData.title;
    this._setCardProperties();
    this._detectEvt();

    return this.cardTemplateClone;
  }
}

export default Card;
