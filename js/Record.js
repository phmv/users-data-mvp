class Record {
  constructor(user, userId, presenter) {
    this.presenter = presenter;
    this.login = user.login;
    this.userId = userId;
    this.htmlEl = this.#buildHtml(user);
  }

  #buildHtml(user) {
    let recordRow = document.createElement("tr");
    recordRow.classList.add("table__row", "record");

    let idCell = document.createElement("td");
    idCell.classList.add("table__cell", "table__cell--id");

    recordRow.appendChild(idCell);
    for (let [key, value] of Object.entries(user)) {
      let cell = document.createElement("td");
      cell.classList.add("table__cell");

      if (key === "comment") {
        cell.classList.add("table__cell--comment");
        let inputEl = document.createElement("input");
        let deleteButton = document.createElement("button");

        inputEl.classList.add("record__comment-input", "form-control", "form-control-sm");
        inputEl.placeholder = "Введите комментарий";
        inputEl.readOnly = true;
        inputEl.addEventListener("dblclick", () => this.presenter.commentDblClickHandler(inputEl, this.userId));
        inputEl.addEventListener("keydown", (e) => this.presenter.commentKeyDownHandler(inputEl, e.code, this.userId));
        cell.appendChild(inputEl);

        deleteButton.classList.add("record__delete-btn");
        deleteButton.addEventListener("click", () => this.presenter.deleteBtnClickHandler(this.userId));
        cell.appendChild(deleteButton);
      } else {
        cell.textContent = value;
      }

      recordRow.appendChild(cell);
    }

    return recordRow;
  }
}
