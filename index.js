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
