var pluralize = require('pluralize')
var words = ['dog', 'person', 'moose', 'ox', 'wife', 'guest', 'man', 'woman', 'mess', 'photo', 'avocado', 'superhero', 'bar', 'monkey', 'combo', 'toy', 'chair', 'toe'];

function getPluralization(word) {
    // This needs to be replaced with the code that returns a pluralized version of the input word
    if (word=="person") {
        return "people";
    } else if (word=="moose") {
        return "moose";
    } else if (word=="ox") {
        return "oxen";
    } else if (word=="wife") {
        return "wives";
    } else if (word=="man") {
        return "men";
    } else if (word=="woman") {
        return "women";
    } else if (word=="mess") {
        return "messes";
    } else if (word=="woman") {
        return "women";
    } else {
        return word + "s"
        
    }
}

function printPluralizedWord(word) {
    console.log(`The plural of ${word} is ${getPluralization(word)}`);
};

words.forEach(printPluralizedWord);