'use strict';

// -name - string min 3 symbol
// -color - one from ['red', 'gray', 'rainbow']
// -maxFlyLength - positive number > 50
// -jump() //return '${this.name} jumping'
// -fly()  //return '${this.name} flying at max length ${this.maxFlyLength}'
class FlySquirrel extends Squirrel {
  constructor (name, color, maxFlyLength) {
    super(name, color);
    this.maxFlyLength = maxFlyLength;
  }

  get maxFlyLength() {
    return this._maxFlyLength;
  }
  set maxFlyLength(length) {
    if (typeof length !== 'number') {
      throw TypeError('Max fly length must be number type!');
    }
    if (length <= 50) {
      throw RangeError('Max fly length must be more then 50!');
    }
    this._maxFlyLength = length;
  }

  fly() {
    return `${this.name} flying at max length ${this.maxFlyLength}`;
  }
}