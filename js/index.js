const inputs = {
  formEl: document.querySelector(".form"),
  loginInput: document.getElementById("login-field"),
  passwordInput: document.getElementById("password-field"),
  emailInput: document.getElementById("email-field"),
  animalInput: document.getElementById("animal-field"),
  filterField: document.querySelector(".table-view__filter"),
};
const usersPresenter = new UsersPresenter(inputs);
