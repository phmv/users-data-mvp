class User {
  constructor(login, password, email, animal) {
    Object.defineProperties(this, {
      _password: {
        writable: true,
      },
      _date: {
        writable: true,
      },
      password: {
        enumerable: true,
        get: function () {
          return this._password.split("").reverse().join("");
        },
      },
      date: {
        enumerable: true,
        get: function () {
          let formatter1 = new Intl.DateTimeFormat("ru");
          return formatter1.format(this._date);
        },
      },
    });
    this.login = login;
    this._password = password;
    this.email = email;
    this.animal = animal;
    this.number = Math.floor(Math.random() * (10000 - 1)) + 1;
    this._date = new Date();
    this.comment = null;
  }
}
