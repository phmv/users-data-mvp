class User {
  constructor(login, password, email, animal) {
    this.login = login;
    this._password = password;
    this.email = email;
    this.animal = animal;
    this.number = Math.floor(Math.random() * (10000 - 1)) + 1;
    this._date = new Date();
    this.comment = null;
  }

  get password() {
    return this._password.split("").reverse().join("");
  }

  get date() {
    let formatter1 = new Intl.DateTimeFormat("ru");
    return formatter1.format(this._date);
  }
}
