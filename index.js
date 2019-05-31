
var words = ['dog', 'person', 'moose', 'ox', 'wife', 'guest', 'man', 'woman', 'mess', 'photo', 'avocado', 'superhero', 'bar', 'monkey', 'combo', 'toy', 'chair', 'toe'];

function getPluralization(word) {
   var pluralize = require('pluralize');
   return pluralize (word);
}

function printPluralizedWord(word) {
    console.log(`The plural of ${word} is ${getPluralization(word)}`);
};

words.forEach(printPluralizedWord);