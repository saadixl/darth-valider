var valider = require('./darth-valider');
var result = valider(5).isType("number").isEquals(8).errors;

/* Printing if there's any error */
for (var i = 0; i < result.length; i++) {
    console.log(result[i] + "\n");
}
