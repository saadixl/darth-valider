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
valider.prototype.equals = function(data) {
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
valider.prototype.equalsIgnoreCase = function(data) {
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
        this.errors.push("InvalidEmail");
    }
    return this;
}

// Checking minimum character
valider.prototype.minLength = function(n){
    if((this.value).toString().length<n){
        this.errors.push("lessThanMinCharacters");
    }
    return this;
}

// Checking maximum character
valider.prototype.maxLength = function(n){
    if((this.value).toString().length>n){
        this.errors.push("moreThanMaxCharacters");
    }
    return this;
}

// Checking minimum value
valider.prototype.minValue = function(n){
    if(parseInt(this.value)<n){
        this.errors.push("lessThanMinValue");
    }
    return this;
}

// Checking maximum character
valider.prototype.maxValue = function(n){
    if(parseInt(this.value)>n){
        this.errors.push("moreThanMaxValue");
    }
    return this;
}


// Checking if uppercase
valider.prototype.isUpper = function(){
    if(this.value!==this.value.toUpperCase()){
        this.errors.push("notUpperCase");
    }
    return this;
}

// Checking if lowercase
valider.prototype.isLower = function(){
    if(this.value!==this.value.toLowerCase()){
        this.errors.push("notLowerCase");
    }
    return this;
}

// Checking if alphabet
valider.prototype.isAlpha = function(){
    if(!(/^[a-zA-Z()]+$/.test(this.value))){
        this.errors.push("notAlphabet");
    }
    return this;
}

// Checking if alphanumeric
valider.prototype.isAlphanumeric = function(){
    if(!(/^[a-z0-9]+$/i.test(this.value))){
        this.errors.push("notAlphanumeric");
    }
    return this;
}


// Exporting all these methods
module.exports = function(input) {
    return new valider(input);
};
