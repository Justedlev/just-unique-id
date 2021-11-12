const { juid, juidFromSymbols } = require("../index");

console.log("juid() =>", juid());
console.log("juid(10) =>", juid(10));
console.log("juid(16, 24) =>", juid(16, 24));
console.log("juid(24, 16) =>", juid(24, 16));
console.log('juidFromSymbols("justedlev") =>', juidFromSymbols("justedlev"));
console.log('juidFromSymbols("justedlev", 10) =>', juidFromSymbols("justedlev", 10));
console.log('juidFromSymbols("justedlev", 10, 5) =>', juidFromSymbols("justedlev", 10, 5));
try {
  juidFromSymbols("");
} catch (e) {
  console.log(e);
}
