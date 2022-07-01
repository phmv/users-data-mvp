class ViewsUpdater {
  _viewsObservingEvents = {};
  updateViews(action, ...args) {
    this._viewsObservingEvents[action].forEach((fn) => fn(...args));
  }

  bindViewEvent(action, callbackFn) {
    if (!this._viewsObservingEvents[action]) {
      this._viewsObservingEvents[action] = [];
      this._viewsObservingEvents[action].push(callbackFn);
    } else {
      this._viewsObservingEvents[action].push(callbackFn);
    }
  }

  removeViewEvent(action, callbackFn) {
    this._viewsObservingEvents[action] = this._viewsObservingEvents[action].filter((fn) => fn !== callbackFn);
  }
}
