class UsersPresenter {
  #model;
  #tableView;
  #cardsView;

  constructor(inputs) {
    this.viewsUpdater = new ViewsUpdater();
    this.#model = new UsersModel(this);
    this.#tableView = new TableView(this);
    this.#cardsView = new CardsView(this);
    this._inputs = inputs;
    this._userFieldEditing = {};
    this.#addListeners();
  }

  #addListeners() {
    this._inputs.formEl.addEventListener("submit", this.#onFormSubmit.bind(this));
    this._inputs.filterField.addEventListener("input", this.#onFilterInput.bind(this));
    document.addEventListener("click", this.outOfCommentClickHandler.bind(this));
  }

  #onFormSubmit(e) {
    e.preventDefault();
    let login = this._inputs.loginInput.value;
    let password = this._inputs.passwordInput.value;
    let email = this._inputs.emailInput.value;

    let animal = this._inputs.animalInput[this._inputs.animalInput.selectedIndex].text;
    let uniqueId = "id" + new Date().getTime();
    let newUser = new User(login, password, email, animal);
    try {
      this.#model.add(newUser, uniqueId);
      this._inputs.filterField.value = "";
    } catch (err) {
      new Alert("warning", err.message);
    }
  }

  #onFilterInput(e) {
    this.viewsUpdater.updateViews("filter", e.target.value);
  }

  deleteBtnClickHandler(userId) {
    this.#model.delete(userId);
  }

  commentDblClickHandler(input, userId) {
    if (input.readOnly === true) {
      this.commentInputEdit(input, userId);
    }
  }

  commentKeyDownHandler(input, keycode, userId) {
    if (keycode !== "Enter") return;
    if (input === this._userFieldEditing.input) {
      this.commentInputAccept();
    } else {
      this.commentInputEdit(input, userId);
    }
  }

  outOfCommentClickHandler(e) {
    if (!this._userFieldEditing.input) return;
    if (e.target === this._userFieldEditing.input) return;
    this.commentInputAccept();
  }

  commentInputEdit(input, userId) {
    this._userFieldEditing.input = input;
    this._userFieldEditing.input.readOnly = false;
    this._userFieldEditing.userId = userId;
  }

  commentInputAccept() {
    let commentText = this._userFieldEditing.input.value;
    let userId = this._userFieldEditing.userId;
    this.#model.editComment(commentText, userId);
    this._userFieldEditing.input.readOnly = true;
    this._userFieldEditing = {};
  }
}
