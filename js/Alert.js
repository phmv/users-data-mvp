class Alert {
  constructor(type, message) {
    this._container = document.querySelector(".alerts-container");
    this._html = this.#buildHTML(type, message);
    this.pop();
  }

  #buildHTML(type, message) {
    let el = document.createElement("div");
    el.classList.add("alert", `alert-${type}`);
    el.setAttribute("role", "alert");
    el.textContent = message;
    return el;
  }

  pop() {
    let container = this._container;
    let alert = this._html;

    container.append(alert);
    let alertHeight = alert.offsetHeight;
    container.style.transform = `translateY(${alertHeight}px)`;
    window.getComputedStyle(container).transform;
    container.classList.add("alerts-container--animate");
    container.style.transform = "";
    container.addEventListener("transitionend", () =>
      container.classList.remove("alerts-container--animate")
    );

    alert.classList.add("alert--shown");
    let transitionDurationMs =
      parseFloat(window.getComputedStyle(alert).transitionDuration) * 1000;

    let poppingPromise = new Promise((res) => setTimeout(() => res(), 3000));

    poppingPromise
      .then(() => {
        alert.classList.remove("alert--shown");
        return new Promise((res) =>
          setTimeout(() => res(), transitionDurationMs)
        );
      })
      .then(() => {
        container.removeChild(alert);
      });
  }
}
