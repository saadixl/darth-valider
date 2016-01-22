// valider() is the main function
function valider(value) {
    this.value = value;
    this.errors = [];
}

// Checking if empty values

valider.prototype.isEmpty = function() {
    if (this.value.trim() == "") {
        this.errors.push("EmptyField");
    }
    return this;
}

// Checking if two values are equal
valider.prototype.isEquals = function(data) {
    if (data !== this.value) {
        if (data.toString().toUpperCase() === this.value.toString().toUpperCase()) {
            this.errors.push("CaseMismatched");
        } else {
            this.errors.push("ValueMismatched");
        }
    }
    return this;
}

// Checking if two values are equal if case is ignored
valider.prototype.isEqualsIgnoreCase = function(data) {
    if (data.toString().toUpperCase() !== this.value.toString().toUpperCase()) {
        this.errors.push("ValueMismatched");
    }
    return this;
}

// Checking if type of two values are same
valider.prototype.isType = function(data) {
    if (data !== typeof(this.value)) {
        this.errors.push("TypeMismatched");
    }
    return this;
}

// Checking if the value is email
valider.prototype.isEmail = function() {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(this.value)) {
        this.errors.push("InValidEmail");
    }
    return this;
}

module.exports = function(input) {
    return new valider(input);
};
