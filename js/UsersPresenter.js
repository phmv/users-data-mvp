class UsersPresenter {
  #model;
  #tableView;
  #viewsObservingEvents = {};

  constructor(inputs) {
    this.#model = new UsersModel(this);
    this.#tableView = new TableView(this);
    this._inputs = inputs;
    this.#addListeners();
  }

  #addListeners() {
    this._inputs.formEl.addEventListener(
      "submit",
      this.#onFormSubmit.bind(this)
    );
    this._inputs.filterField.addEventListener(
      "input",
      this.#onFilterInput.bind(this)
    );
  }

  #onFormSubmit(e) {
    e.preventDefault();
    let login = this._inputs.loginInput.value;
    let password = this._inputs.passwordInput.value;
    let email = this._inputs.emailInput.value;
    let animal =
      this._inputs.animalInput[this._inputs.animalInput.selectedIndex].text;
    let uniqueId = "id" + new Date().getTime();
    let newUser = new User(login, password, email, animal);
    try {
      this.#model.add(newUser, uniqueId);
    } catch (err) {
      new Alert("warning", err.message);
    }
  }

  #onFilterInput(e) {
    this.updateViews("filter", e.target.value);
  }

  onDelete(userId) {
    this.#model.delete(userId);
  }

  updateViews(action, ...args) {
    this.#viewsObservingEvents[action].forEach((fn) => fn(...args));
  }

  bindViewEvent(action, callbackFn) {
    if (!this.#viewsObservingEvents[action]) {
      this.#viewsObservingEvents[action] = [];
      this.#viewsObservingEvents[action].push(callbackFn);
    } else {
      this.#viewsObservingEvents[action].push(callbackFn);
    }
  }

  removeViewEvent(action, callbackFn) {
    this.#viewsObservingEvents[action] = this.#viewsObservingEvents[
      action
    ].filter((fn) => fn !== callbackFn);
  }
}
