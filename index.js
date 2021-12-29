const myArg = process.argv[2];

import { franc } from 'franc';
import langs from 'langs';

const ISOlanguage = franc(myArg);

const guessedLanguage = langs.where("3", ISOlanguage);


console.log(`Guessed language: ${guessedLanguage.name}`);