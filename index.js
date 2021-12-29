// Get argument
const myArg = process.argv[2];

// Importing modules 'franc' and 'langs'
import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

// Passing argument to franc function to get ISO guessed language
const ISOlanguage = franc(myArg, { minLength: 5 });

if (ISOlanguage === 'und') {
    // Display error when it couldn't find appropriate language
    console.error('Sorry, could not figure it out! Try with more sample text.'.red)
}
else {
    // Get full name of language and 'console.log' it
    const guessedLanguage = langs.where("3", ISOlanguage);
    console.log(`Guessed language: ${guessedLanguage.name}`.green);
}
