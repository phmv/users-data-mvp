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
    el.classList.add("user-card__field-text");
    return el;
  }

  #buildHtml(user, userId) {
    let cardHtml = document.createElement("article");
    cardHtml.classList.add("user-card", "card");
    cardHtml.innerHTML = `<h3 class="user-card__title">${userId}</h3>
    <div class="user-card__info">
      <p class ="user-card__field">
        <span class="user-card__field-title">Login: </span>
        <span class="user-card__field-text">${user.login}</span>
      </p>
      <p class ="user-card__field">
        <span class="user-card__field-title">Email: </span>
        <span class="user-card__field-text">${user.email}</span>
      </p>
      <p class ="user-card__field">
        <span class="user-card__field-title">Animal: </span>
        <span class="user-card__field-text">${user.animal}</span>
      </p>
      <p class ="user-card__field">
        <span class="user-card__field-title">Creation date: </span>
        <span class="user-card__field-text">${user.date}</span>
      </p>
    </div>
    <p class ="user-card__field user-card__field--comment">
      <span class="user-card__field-title">Comment: </span>
    </p>`;
    cardHtml.querySelector(".user-card__field--comment").appendChild(this.#commentEl);
    return cardHtml;
  }
}
