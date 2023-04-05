export default class Section {
  constructor({ items, renderFunction }, cardSelector) {
    this.items = items;
    this.renderFunction = renderFunction;
    this.cardSelector = document.querySelector(cardSelector);
  }

  renderer() {
    this.items.forEach((item) => {
      const currentItemHTML = this.renderFunction(item);
      this.addItem(currentItemHTML);
    });
  }

  addItem(currentItemHTML) {
    this.cardSelector.prepend(currentItemHTML);
  }
}
