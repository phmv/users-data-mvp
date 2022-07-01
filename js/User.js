class User {
  constructor(login, password, email, animal) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.animal = animal;
    this.number = Math.floor(Math.random() * (10000 - 1)) + 1;
    this.date = new Date();
    this.comment = null;
  }

  set password(password) {
    this._password = password.split("").reverse().join("");
  }

  set date(date) {
    let formatter1 = new Intl.DateTimeFormat("ru");
    this._date = formatter1.format(date);
  }
}
