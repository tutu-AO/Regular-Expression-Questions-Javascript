// Write your regular expressions within the // delimiters. Example: /a+/
//CHARACTER CLASSES

// Exercise 14: Match two or more o’s, but only if they’re in the
// middle of a word.
// Do not include any characters other than the o’s in the match
const middleOoRegex = /\Boo+\B/;

// Exercise 15: Match list item strings that start with one or more digits
// followed by a ) .Example string to match: 
// 1) make breakfast. 2) eat breakfast. 3) go to work.
// Match the entire contents of each list item string (not just the
// digit(s) and parenthesis).
const listItemRegex = /^\d+\).*$/;

// Exercise 16: Match any whitespace at the end of a string
// Do not include characters other than the whitespace in the match
// Do not match strings that don’t have whitespace at the end
const trailingWhitespaceRegex = /\s+$/;

// Exercise 17: Find any phrase that matches ____ the ____
// That is, one word before and after "the" (without quotes).
// Don't match any non-word characters before or after the matched
// string.
const blankTheBlankRegex = /^\w+\sthe\s\w+$/;

// Exercise 18: Make a simplified email address matcher with these rules:
// - One or more word or period (.) characters before the @
// - At least one  period (.) after the @
// - The string should contain only the email address and no
//   surrounding characters
// 
// Interested in unsimplified? See http://emailregex.com/
const emailRegex = /^[\w\.]+@[\w\.]+\.[\w]+$/;