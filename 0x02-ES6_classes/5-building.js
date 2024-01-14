
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  set setSqft() {
    this._sqft = setSqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
