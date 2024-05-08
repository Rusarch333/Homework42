'use strict';

// -name - string min 3 symbol
// -color - one from ['red', 'gray', 'rainbow']
// -maxFlyLength - positive number > 50
// -words - Array.isArray(words) -- example - ['I','am','a','magic','squirrel']
// -jump() //return '${this.name} jumping'
// -fly() //return '${this.name} flying at max length ${this.maxFlyLength}'
// -say() // return 'I am a magic squirrel' -- рядок створений з масива слів
class MagicSquirrel extends FlySquirrel {
  constructor (name, color, maxFlyLength, words) {
    super(name, color, maxFlyLength);
    this.words = words;
  }

  get words() {
    return this._words;
  }
  set words(words) {
    if (Array.isArray(words) === false) {
      throw TypeError("Words must be array!");
    }
    this._words = words;
  }

  say() {
    return this.words.join(" ");
  }
}