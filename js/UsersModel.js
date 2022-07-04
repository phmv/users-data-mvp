class UsersModel {
  constructor(presenter, list = {}) {
    this.presenter = presenter;
    this.viewsUpdater = presenter.viewsUpdater;
    this.list = list;
  }

  add(newUser, userId) {
    for (let user of Object.values(this.list)) {
      if (user.login === newUser.login) {
        throw new Error("Пользователь с таким логином уже существует");
      }
      if (user.email === newUser.email) {
        throw new Error("Пользователь с таким email уже существует");
      }
    }
    this.list[userId] = newUser;
    this.viewsUpdater.updateViews("add", Object.assign({}, newUser), userId);
  }

  delete(userId) {
    if (!this.list[userId]) throw new Error("Такого пользователя не существует");
    delete this.list[userId];
    this.viewsUpdater.updateViews("delete", userId);
  }

  editComment(text, userId) {
    this.list[userId].comment = text;
    this.viewsUpdater.updateViews("editComment", text, userId);
  }
}
