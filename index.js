var valider = require('./darth-valider');
var result = valider("m@example.co").isType("number").isEmail().errors;

/* Printing if there's any error */
for (var i = 0; i < result.length; i++) {
    console.log(result[i] + "\n");
}
