/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('software engineer'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

function hasAllVowels(str) {
  const set = new Set(str)
  return 'aeiou'.split('').every(letter => set.has(letter))
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
