export default class HolbertonCourse {
  /* eslint-disable valid-typeof */
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable clas-methods-use-this */
  constructor(name, length, students) {
    this._name = name;
    this._lenght = length;
    this._students = students;
    this._validateType(name, 'string', 'Name');
    this._validateType(length, 'number', 'Length');
    this._validateType(students, 'object', 'Student');
  }

  get name() {
    return this._name;
  }

  set name(setName) {
    if (typeof setName !== 'string') throw TypeError('Name must be string');
    this._name = setName;
  }

  get length() {
    return this._length;
  }

  set length(setLength) {
    if (typeof setLength !== 'number') throw TypeError('Length must be number');
    this._length = setLength;
  }

  get students() {
    return this._students;
  }

  set students(setStudents) {
    if (!Array.isArray(setStudents)) throw TypeError('Students must be array');
    this._students = setStudents;
  }

  _validateType(value, expectedType, fieldName) {
    if (typeof value !== expectedType) {
      throw new TypeError(`${fieldName} must be of type ${expectedType}`);
    }
  }
}
