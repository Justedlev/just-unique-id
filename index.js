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
const { jrand } = require("just-random-number");

const MAX_LENGTH = 24;
const symbolsList = [
  alphabetSortedFull,
  `${alphabetLowerSorted}${alphabetUpperSorted}`,
  `${alphabetLowerKeyboard}${alphabetUpperKeyboard}`,
  `${alphabetLowerKeyboardInverted}${alphabetUpperKeyboardInverted}`,
  numbersSorted,
  numbersInvert,
];

exports.juidFromSymbols = (symbols, minLength, maxLength = MAX_LENGTH) => {
  if(typeof symbols === "undefined" || symbols === "") {
    throw new Error("The field 'symbols' cannot be empty or undefined");
  }
  return generate(minLength, maxLength, symbols);
};

exports.juid = (minLength, maxLength = MAX_LENGTH) => {
  return generate(minLength, maxLength, symbolsList);
};

function generate(minLength, maxLength, symbols) {
  const length = getLength(minLength, maxLength);
  let id = "";
  for (let i = 0; i < length; i++) {
    const randSymbs = symbols[jrand(0, symbols.length - 1)];
    id += randSymbs[jrand(0, randSymbs.length - 1)];
  }
  return id;
}

function getLength(minLength, maxLength) {
  if (minLength) {
    if (minLength < 1 && maxLength < 1) {
      return jrand(1, 25);
    }
    if (minLength === maxLength) {
      return maxLength;
    }
    if (maxLength < 1) {
      return minLength;
    }
    if (maxLength < 1) {
      return minLength;
    }
    return minLength < maxLength ? jrand(minLength, maxLength) : jrand(maxLength, minLength);
  } else {
    return maxLength;
  }
}
