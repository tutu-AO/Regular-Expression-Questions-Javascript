// Write your regular expressions within the // delimiters. Example: /a+/
//COLLECTIONS AND RANGES

// Exercise 5: Match a string that represents a binary number
// (contains only 0s and 1s)
const binaryRegex = /^[01]+$/;

// Exercise 6: Match a potential Hawaiian word
// from this collection of letters: AEIOUHKLMNPW
// Apostrophe is an option for all but the first letter.
// First letter can be lowercase or capital; other
// letters must be lowercase. The word must contain one or
// more letter.
const hawaiianRegex = /^[AEIOUHKLMNPWaeiouhklmnpw][aeiouhklmnpw\']*$/;

// Exercise 7: Match a telephone number of the format 555-555-5555
// (where each of the 5s could be any number)
const telephoneRegex = /^(?:[0-9]{3}-){2}[0-9]{4}$/;

// Exercise 8: Match strings that are at least six characters
// and don’t contain the letter A (uppercase or lowercase)
const sixPlusNoARegex = /^[^aA]{6,}/;