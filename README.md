# darth-valider

## A simple NodeJS validation module


## How to install

```
npm install darth-valider

```

## How to use

```
var dv = require('darth-valider');

// Basic Examples
dv("John Doe").isEquals("Jon Doe").errors;
// [ 'ValueMismatched' ]

dv("John Doe@example.com").isEmail().errors;
// [ 'InValidEmail' ]

dv(5).isType("number").errors;
// [] As 5 is a number, the error array is empty

// Chained Examples

dv(5).isEqualsIgnoreCase("five").isType("string").errors;
// [ 'ValueMismatched', 'TypeMismatched' ]


```


## Supported Validations

*isEmpty()*

*isEquals(any)*

*isEqualsIgnoreCase(any)*

*isType(string)*

*isEmail()*
