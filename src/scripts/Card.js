class Card {
  constructor(cardData, templateSelector, openImage, deleteCard) {
    (this.cardData = cardData), (this.templateSelector = templateSelector);
    this._generateTemplate();
    this.openImage = openImage;
    this.deleteCard = deleteCard;
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
    this.removeButton.addEventListener("click", (evt) =>
      this.handleRemove(evt)
    );
    this.likeButton.addEventListener("click", this.handleLike);
    this.popupImage.addEventListener("click", (evt) =>
      this.handleCardClick(evt)
    );
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
    this.deleteCard(event, this.cardData.id);
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
    this.openImage(event);
  }

  generateCard() {
    this.cardTemplateClone.querySelector(".cards__image").src =
      this.cardData.src;
    this.cardTemplateClone.querySelector(".cards__image").alt =
      this.cardData.alt;
    this.cardTemplateClone.querySelector(".cards__location").textContent =
      this.cardData.title;
    this.cardTemplateClone.querySelector(".cards__like-count").textContent =
      this.cardData.likes.length;
    this._setCardProperties();
    this._detectEvt();
    if (this.cardData.removeBtn) {
      this.removeButton.classList.add("cards__remove_enabled");
    }

    return this.cardTemplateClone;
  }
}

export default Card;
