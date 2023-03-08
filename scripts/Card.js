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

  handleLike(event) {}
  handleRemove(event) {
    event.target.parentElement.remove();
  }
  handleOpenImage(event) {}

  _detectEvt() {
    this.removeButton.addEventListener("click", this.handleRemove);
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
