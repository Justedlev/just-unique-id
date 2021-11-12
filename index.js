"use strict";

const {
  alphabetSortedFull,
  alphabetLowerSorted,
  alphabetLowerKeyboard,
  alphabetLowerKeyboardInverted,
  alphabetUpperSorted,
  alphabetUpperKeyboard,
  alphabetUpperKeyboardInverted,
} = require("./lib/alphabet");
const { numbersSorted, numbersInvert } = require("./lib/numbers");
const { random } = require("./lib/utils/random");

const MAX_LENGTH = 24;
const symbols = [
  alphabetSortedFull,
  `${alphabetLowerSorted}${alphabetUpperSorted}`,
  `${alphabetLowerKeyboard}${alphabetUpperKeyboard}`,
  `${alphabetLowerKeyboardInverted}${alphabetUpperKeyboardInverted}`,
  numbersSorted,
  numbersInvert,
];

exports.juid = (minLength = MAX_LENGTH, maxLength) => {
  return generate(minLength, maxLength);
};

function generate(minLength, maxLength) {
  const length = getLength(minLength, maxLength);
  let id = "";
  for (let i = 0; i < length; i++) {
    const randSymbs = getSumbols();
    id += randSymbs[random(0, randSymbs.length - 1)];
  }
  return id;
}

function getLength(minLength, maxLength) {
  return maxLength
    ? minLength > maxLength
      ? random(maxLength, minLength)
      : random(minLength, maxLength)
    : minLength;
}

function getSumbols() {
  return symbols[random(0, symbols.length - 1)];
}
