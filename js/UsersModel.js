class UsersModel {
  constructor(presenter, list = {}) {
    this.presenter = presenter;
    this.list = list;
  }

  add(newUser, id) {
    for (let user of Object.values(this.list)) {
      if (user.login === newUser.login) {
        throw new Error("Пользователь с таким логином уже существует");
      }
      if (user.email === newUser.email) {
        throw new Error("Пользователь с таким email уже существует");
      }
    }
    this.list[id] = newUser;
    this.presenter.updateViews("add", Object.assign({}, newUser), id);
  }

  delete(id) {
    if (!this.list[id]) throw new Error("Такого пользователя не существует");
    delete this.list[id];
    this.presenter.updateViews("delete", id);
  }
}
