function valider(value) {
    this.value = value;
    this.errors = [];
}

valider.prototype.isValue = function(data) {
    if (data !== this.value) {
        this.errors.push("ValueMismatched");
    }
    return this;
}

valider.prototype.isType = function(data) {
    if (data !== typeof(this.value)) {
        this.errors.push("TypeMismatched");
    }
    return this;
}

module.exports = function(input) {
    return new valider(input);
};
