var valider = require('./darth-valider');
var input = {
    "input": "55",
    "type": Number,
    "expected": 55
};
var result = valider(input);

console.log(
    "Input: " + input.input + "\n" +
    "Expected value: " + input.expected + "\n" +
    "Expected type: " + input.type + "\n" +
    "Mismatching error: " + result.matchError + "\n" +
    "Mismatch after ignoring case: " + result.matchErrorIC + "\n" +
    "Type matching error: " + result.typeError + "\n"
);
