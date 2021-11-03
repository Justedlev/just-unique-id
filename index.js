"use strict";

const { alphabetLower, alphabetUpper } = require("./lib/alphabet");
const { numbers } = require("./lib/numbers");
const { random } = require("./lib/utils/random");

const MAX_LENGTH = 24;
const symbols = `${alphabetUpper}${alphabetLower}${numbers}`;

exports.juid = (minLength = MAX_LENGTH, maxLength) => {
  return generate(minLength, maxLength);
};

const generate = (minLength, maxLength) => {
  const length = getLength(minLength, maxLength);
  let id = "";
  for (let i = 0; i < length; i++) {
    const randSymbs = symbols[random(0, symbols.length - 1)];
    id += randSymbs[random(0, randSymbs.length - 1)];
  }
  return id;
};

const getLength = (minLength, maxLength) => {
  return maxLength
    ? minLength > maxLength
      ? random(maxLength, minLength)
      : random(minLength, maxLength)
    : minLength;
};
