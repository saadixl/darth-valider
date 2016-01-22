var valider = require('./darth-valider');
var result = valider("hello").isValue("hello").isType(String).error;
console.log(result[0] + ' ' + result[1]);
