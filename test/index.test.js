const { juid } = require("../index");

console.log(juid());
console.log(juid(10));
console.log(juid(16, 24));
console.log(juid(24, 16));
