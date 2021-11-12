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
const symbolsList = [
  alphabetSortedFull,
  `${alphabetLowerSorted}${alphabetUpperSorted}`,
  `${alphabetLowerKeyboard}${alphabetUpperKeyboard}`,
  `${alphabetLowerKeyboardInverted}${alphabetUpperKeyboardInverted}`,
  numbersSorted,
  numbersInvert,
];

exports.juidFromSymbols = (symbols, minLength = MAX_LENGTH, maxLength) => {
  if(typeof symbols === "undefined" || symbols === "") {
    throw new Error("The field 'symbols' cannot be empty or undefined");
  }
  return generate(minLength, maxLength, symbols);
};

exports.juid = (minLength = MAX_LENGTH, maxLength) => {
  return generate(minLength, maxLength, symbolsList);
};

function generate(minLength, maxLength, symbols) {
  const length = getLength(minLength, maxLength);
  let id = "";
  for (let i = 0; i < length; i++) {
    const randSymbs = symbols[random(0, symbols.length - 1)];
    id += randSymbs[random(0, randSymbs.length - 1)];
  }
  return id;
}

function getLength(minLength, maxLength) {
  if (maxLength) {
    if (minLength < 1 && maxLength < 1) {
      return minLength;
    }
    if (minLength === maxLength) {
      return minLength;
    }
    if (minLength < 1) {
      return maxLength;
    }
    if (maxLength < 1) {
      return minLength;
    }
    return minLength < maxLength ? random(minLength, maxLength) : random(maxLength, minLength);
  } else {
    return minLength;
  }
}
