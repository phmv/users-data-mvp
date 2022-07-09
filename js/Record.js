class Record {
  constructor(user, userId, presenter) {
    this.presenter = presenter;
    this.userId = userId;
    this.htmlEl = this.#buildHtml(user);
  }

  #buildHtml(user) {
    let recordRow = document.createElement("tr");
    recordRow.classList.add("table__row", "record");
    recordRow.innerHTML = `
      <th class="table__cell table__cell--id" scope="row"></th>
      <td class="table__cell">${user.login}</td>
      <td class="table__cell">${user.password}</td>
      <td class="table__cell">${user.email}</td>
      <td class="table__cell">${user.animal}</td>
      <td class="table__cell">${user.number}</td>
      <td class="table__cell">${user.date}</td>
      <td class="table__cell table__cell--comment"></td>
    `;
    recordRow.querySelector(".table__cell--comment").append(this.#createCommentInput(), this.#createDeleteButton());

    return recordRow;
  }

  #createCommentInput() {
    let inputEl = document.createElement("input");

    inputEl.classList.add("record__comment-input", "form-control", "form-control-sm");
    inputEl.placeholder = "Введите комментарий";
    inputEl.readOnly = true;
    inputEl.addEventListener("dblclick", () => this.presenter.commentDblClickHandler(inputEl, this.userId));
    inputEl.addEventListener("keydown", (e) => this.presenter.commentKeyDownHandler(inputEl, e.code, this.userId));

    return inputEl;
  }

  #createDeleteButton() {
    let deleteButton = document.createElement("button");

    deleteButton.classList.add("record__delete-btn");
    deleteButton.addEventListener("click", () => this.presenter.deleteBtnClickHandler(this.userId));

    return deleteButton;
  }
}
