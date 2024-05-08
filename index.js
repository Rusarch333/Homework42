'use strict';

const SQUIRREL_NAME = 'Krasavchik';
const SQUIRREL_COLOR = 'red';

const FLY_SQUIRREL_NAME = "Pushistik";
const FLY_SQUIRREL_COLOR = 'gray';
const FLY_SQUIRREL__MAX_JUMP_LENGTH = 65;

const MAGIC_SQUIRREL_NAME = 'Shustrik';
const MAGIC_SQUIRREL_COLOR = 'rainbow';
const MAGIC_SQUIRREL__MAX_JUMP_LENGTH = 85;
const SQUIRREL_WORDS = ['I', 'am', 'a', 'magic', 'squirrel'];

try {
  const squirrel = new Squirrel(SQUIRREL_NAME, SQUIRREL_COLOR);
  const flySquirrel = new FlySquirrel(FLY_SQUIRREL_NAME, FLY_SQUIRREL_COLOR, FLY_SQUIRREL__MAX_JUMP_LENGTH);
  const magicSquirrel = new MagicSquirrel(MAGIC_SQUIRREL_NAME, MAGIC_SQUIRREL_COLOR, MAGIC_SQUIRREL__MAX_JUMP_LENGTH, SQUIRREL_WORDS);
  
  console.log(magicSquirrel.name);
  console.log(magicSquirrel.color);
  console.log(magicSquirrel.maxFlyLength);
  console.log(magicSquirrel.words);
  console.log('\n');

  console.log(magicSquirrel.jump());
  console.log(magicSquirrel.fly());
  console.log(magicSquirrel.say());
} catch(error) {
  console.error(error);
}