var valider = require('./darth-valider');
var result = valider("hello").isValue("heilo").isType("number").errors;

/* Printing if there's any error */
for (var i = 0; i < result.length; i++) {
    console.log(result[i] + "\n");
}
