module.exports = function(obj) {
    var matchError = true,
        matchErrorIC = true,
        typeError = true;

    /*ALL MATCHING AND CONDITION*/
    if (generalMatching(obj.input, obj.expected)) {
        matchError = false;
    }
    if (ignoreCaseMatching(obj.input, obj.expected)) {
        matchErrorIC = false;
    }

    if (typeMatching(obj.input, obj.expected)) {
        typeError = false;
    }

    var result = {
        "matchError": matchError,
        "matchErrorIC": matchErrorIC,
        "typeError": typeError
    };

    return result;

}

function generalMatching(x, y) {
    return (x === y);
}

function ignoreCaseMatching(x, y) {
    return (x.toString().toUpperCase() === y.toString().toUpperCase());
}

function typeMatching(x, y) {
    return (typeof(x) === y);
}
