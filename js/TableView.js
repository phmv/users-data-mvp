class TableView {
  constructor(presenter) {
    this.presenter = presenter;
    this.viewsUpdater = presenter.viewsUpdater;
    this.tableBody = document.querySelector(".table__body");
    this.records = [];
    this.viewsUpdater.bindViewEvent("add", this.addRecord.bind(this));
    this.viewsUpdater.bindViewEvent("delete", this.deleteRecord.bind(this));
    this.viewsUpdater.bindViewEvent("filter", this.filterRecords.bind(this));
  }

  addRecord(newUser, userId) {
    let record = new Record(newUser, userId, this.presenter);
    this.records.push(record);
    this.#render(this.records);
  }

  deleteRecord(userId) {
    let recordToDeleteIndex = this.records.findIndex((rec) => rec.userId === userId);
    let recordToDelete = this.records.splice(recordToDeleteIndex, 1)[0];
    this.tableBody.removeChild(recordToDelete.htmlEl);
    this.#updateRecordsId();
  }

  filterRecords(filterString) {
    this.loginFilter = filterString;
    let filteredRecords = this.records.filter((record) => record.login.includes(filterString));
    this.#render(filteredRecords);
  }

  #render(recordsArray) {
    this.tableBody.innerHTML = "";
    this.displayedRecords = recordsArray;
    recordsArray.forEach((record) => {
      this.tableBody.appendChild(record.htmlEl);
    });
    this.#updateRecordsId();
  }

  #updateRecordsId() {
    let counter = 1;
    for (let record of this.tableBody.children) {
      let idCell = record.querySelector(".table__cell--id");
      idCell.textContent = counter++;
    }
  }
}
