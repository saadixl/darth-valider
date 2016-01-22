var valider = require('./darth-valider');
var result = valider("hello").isValue("World").isType("number").error;

/* Printing if there's any error */
for (var i = 0; i < result.length; i++) {
    console.log(result[i] + "\n");
}
