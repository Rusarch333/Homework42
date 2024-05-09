'use strict';

// -name - string min 3 symbol
// -color - one from ['red', 'gray', 'rainbow']
// -jump() // return '${this.name} jumping'

/**
 * Клас, який реалізує білку
 */
class Squirrel {
  static POSSIBLE_SQUIRREL_COLORS = ['red', 'gray', 'rainbow'];

  /**
   * Конструктор класа Squirrel
   * @param {string} name 
   * @param {string} color 
   */
  constructor (name, color) {
    // ЄДИНЕ місце без "_"!

    this.name = name;
    this.color = color;
  }
  
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string type!');
    }
    if (name.length < 3) {
      throw new Error('Name must have 3 and more symbols!');
    }

    this._name = name;
  }
  
  get color() {
    return this._color;
  }
  set color(color) {
    if (typeof color !== 'string') {
      throw new TypeError('Color must be string type!');
    }
    if(POSSIBLE_SQUIRREL_COLORS.includes(color) === false) {
      throw new RangeError('Color value is not one from ["red", "gray", "rainbow"]!');
    }

    this._color = color;
  }
  /**
   * Функція, яка виводить рядок, що білка стрибнула
   * @returns {string}
   */
  jump() {
    return `${this._name} jumping`;
  }
}