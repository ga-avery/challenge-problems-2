/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

function favoriteWord(favoriteLetter, sentence) {
  const regex = new RegExp(`${favoriteLetter}`, 'g');
  const splitSentence = sentence.split(/\s+/g);
  const counts = splitSentence.map(word => word.match(regex)?.length || 0);
  const max = Math.max(...counts);
  return max > 0 ? splitSentence[counts.indexOf(max)] : '';
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;