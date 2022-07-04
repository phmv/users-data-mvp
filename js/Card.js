class Card {
  constructor(user, userId) {
    this.userId = userId;
    this.commentEl = this.#buildCommentEl(user.comment);
    this.htmlEl = this.#buildHtml(user, userId);
  }

  #buildCommentEl(comment) {
    let el = document.createElement("p");
    el.classList.add("card__comment");
    el.textContent = comment;
    return el;
  }

  #buildHtml(user, userId) {
    let cardHtml = document.createElement("article");
    cardHtml.classList.add("card");
    cardHtml.innerHTML = `<h2 class="card__title">${userId}</h2>
    <div class="card__info">
      <p class="card__info-field"><span class="card__field-title">Login: </span>${user.login}</p>
      <p class="card__info-field"><span class="card__field-title">Email: </span>${user.email}</p>
      <p class="card__info-field"><span class="card__field-title">Animal: </span>${user.animal}</p>
      <p class="card__info-field"><span class="card__field-title">Creation date: </span>${user.date}</p>
    </div>`;
    cardHtml.appendChild(this.commentEl);
    return cardHtml;
  }
}
