function valider(value) {
    this.value = value;
    this.error = [];
}

valider.prototype.isValue = function(data) {
    if (data !== this.value) {
        this.error.push("ValueMismatched");
    }
    return this;
}

valider.prototype.isType = function(data) {
    if (typeof(data) !== typeof(this.value)) {
        this.error.push("TypeMismatched");
    }
    return this;
}

module.exports = function(input) {
    return new valider(input);
};
