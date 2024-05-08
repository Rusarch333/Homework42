'use strict';

// -name - string min 3 symbol
// -color - one from ['red', 'gray', 'rainbow']
// -jump() // return '${this.name} jumping'
class Squirrel {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }
  
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be string type!');
    }
    if (name.length < 3) {
      throw Error('Name must have 3 and more symbols!');
    }

    this._name = name;
  }
  
  get color() {
    return this._color;
  }
  set color(color) {
    if (typeof color !== 'string') {
      throw TypeError('Color must be string type!');
    }

    const POSSIBLE_COLORS = ['red', 'gray', 'rainbow']; // Залишати їх ДО класа = робити клас брудним

    if(POSSIBLE_COLORS.includes(color) === false) {
      throw RangeError('Color value is not one from ["red", "gray", "rainbow"]!');
    }
    this._color = color;
  }

  jump() {
    return `${this.name} jumping`;
  }
}