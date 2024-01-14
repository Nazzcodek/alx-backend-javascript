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

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
