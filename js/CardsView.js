class CardsView {
  constructor(presenter) {
    this.presenter = presenter;
    this.viewsUpdater = presenter.viewsUpdater;
    this.cardsContainer = document.querySelector(".cards");
    this.cards = [];
    this.viewsUpdater.bindViewEvent("add", this.addCard.bind(this));
    this.viewsUpdater.bindViewEvent("delete", this.deleteCard.bind(this));
    this.viewsUpdater.bindViewEvent("editComment", this.editComment.bind(this));
  }

  addCard(newUser, userId) {
    let card = new Card(newUser, userId);
    this.cards.push(card);
    this.cardsContainer.appendChild(card.htmlEl);
  }

  deleteCard(userId) {
    let cardToDeleteIndex = this.cards.findIndex((card) => card.userId === userId);
    let cardToDelete = this.cards.splice(cardToDeleteIndex, 1)[0];
    this.cardsContainer.removeChild(cardToDelete.htmlEl);
  }

  editComment(text, userId) {
    let cardToEdit = this.cards.find((card) => card.userId === userId);
    cardToEdit.commentEl.textContent = text;
  }
}
