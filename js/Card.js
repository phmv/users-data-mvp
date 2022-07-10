class Card {
  #commentEl;
  constructor(user, userId) {
    this.userId = userId;
    this.#commentEl = this.#buildCommentEl();
    this.htmlEl = this.#buildHtml(user, userId);
    this.comment = user.comment;
  }

  set comment(text) {
    this.#commentEl.textContent = text ? text : "Комментарий отсутствует";
  }

  #buildCommentEl() {
    let el = document.createElement("span");
    el.classList.add("user-card__field-text", "d-block", "fst-italic", "text-muted");
    return el;
  }

  #buildHtml(user, userId) {
    let cardHtml = document.createElement("article");
    cardHtml.classList.add("user-card", "card");
    cardHtml.innerHTML = `<h5 class="user-card__title card-header text-bg-primary">${userId}</h5>
    <ul class="user-card__info list-group list-group-flush">
      <li class ="user-card__field list-group-item">
        <span class="user-card__field-title fw-bold">Login: </span>
        <span class="user-card__field-text">${user.login}</span>
      </li>
      <li class ="user-card__field list-group-item">
        <span class="user-card__field-title fw-bold">Email: </span>
        <span class="user-card__field-text">${user.email}</span>
      </li>
      <li class ="user-card__field list-group-item">
        <span class="user-card__field-title fw-bold">Animal: </span>
        <span class="user-card__field-text">${user.animal}</span>
      </li>
      <li class ="user-card__field list-group-item">
        <span class="user-card__field-title fw-bold">Creation date: </span>
        <span class="user-card__field-text">${user.date}</span>
      </li>
    </ul>
    <div class ="user-card__field user-card__field--comment card-body">
      <span class="user-card__field-title card-text d-block fw-bold">Comment: </span>
    </div>`;
    cardHtml.querySelector(".user-card__field--comment").appendChild(this.#commentEl);
    return cardHtml;
  }
}
