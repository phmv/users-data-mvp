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
    // let mm = date.getMonth() + 1; // getMonth() is zero-based
    // let dd = date.getDate();

    // this._date = [
    //   (dd > 9 ? "" : "0") + dd,
    //   (mm > 9 ? "" : "0") + mm,
    //   date.getFullYear(),
    // ].join(".");
  }
}
