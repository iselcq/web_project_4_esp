class Card {
  constructor(cardData, element) {
    (this.cardData = cardData), (this.element = element);
  }
  _generateCard() {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardTemplateClone = cardTemplate
      .querySelector(".cards__card")
      .cloneNode(true);
    this.likeButton = cardTemplateClone.querySelector("#like-button");
    this.removeButton = cardTemplateClone.querySelector("#remove-button");
    this.popupImage = cardTemplateClone.querySelector(".cards__image");
    this.cardTemplateClone = cardTemplateClone;
    cardTemplateClone.querySelector(".cards__image").src = this.element.src;
    cardTemplateClone.querySelector(".cards__image").alt = this.element.alt;
    cardTemplateClone.querySelector(".cards__location").textContent =
      this.element.title;
    return this.cardTemplateClone;
  }
  handleLike(event) {}
  handleRemove(event) {}
  handleOpenImage(event) {}
}
