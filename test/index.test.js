const { juidRange } = require("..");
const { juid } = require("../index");

console.log(juid());
console.log(juid(10));
console.log(juidRange(16, 24));
