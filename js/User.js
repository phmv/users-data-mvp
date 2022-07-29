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
      // Passed Object.assign({}, newUser) as parameter to ViewsUpdater in UserModel.js to prevent changing real User object by any of View
      // Object.assign iterating over properties when copying in new object, that's why didn't use just get date(), because getters aren't enumerable
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
