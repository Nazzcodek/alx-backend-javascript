export default class Building {
  constructor(sqft) {
  /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    /* eslint-disable class-methods-use-this */
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
