const myArg = process.argv[2];

import { franc } from 'franc';

const guessedLanguage = franc(myArg);

console.log(`Guessed language: ${guessedLanguage}`);