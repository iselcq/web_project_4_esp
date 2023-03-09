class Card {
  constructor(cardData, templateSelector) {
    (this.cardData = cardData), (this.templateSelector = templateSelector);
    this._generateTemplate();
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
  }

  _detectEvt() {
    this.removeButton.addEventListener("click", this.handleRemove);
    this.likeButton.addEventListener("click", this.handleLike);
    this.popupImage.addEventListener("click", this.handleOpenImage);
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

  handleOpenImage(event) {
    this.imagePopUp = document.querySelector(".image-popup");
    this.imageSelected = this.imagePopUp.querySelector(".image-popup__image");
    this.imageTitle = this.imagePopUp.querySelector(".image-popup__title");
    this.imagePopUp.classList.add("image-popup__opened");
    this.imageSelected.src = event.target.src;
    this.imageSelected.alt = event.target.alt;
    this.imageTitle.innerText =
      event.target.parentElement.children[2].children[0].innerText;
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
