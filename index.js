"use strict";

const { alphabetLower, alphabetUpper } = require("./lib/alphabet");
const { numbers } = require("./lib/numbers");
const { random } = require("./lib/utils/random");

const MAX_LENGTH = 24;
const symbols = `${alphabetUpper}${alphabetLower}${numbers}`;

exports.juid = (maxLength = MAX_LENGTH) => {
  let id = "";
  for (let i = 0; i < maxLength; i++) {
    const randSymbs = symbols[random(0, symbols.length - 1)];
    id += randSymbs[random(0, randSymbs.length - 1)];
  }
  return id;
};

exports.juidRange = (minLength, maxLength) => {
  let length;
  if (minLength > maxLength) {
    length = random(maxLength, minLength);
  } else {
    length = random(minLength, maxLength);
  }
  return this.juid(length);
};
