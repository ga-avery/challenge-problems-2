/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/
const tryRequire = require('../utils/try_require.js');
const assert = require('assert');

const missyElliot = tryRequire('../problems/1-missy-elliot.js');
const oddWordsOut = tryRequire('../problems/2-odd-words-out.js');
const mindPsAndQs = tryRequire('../problems/3-mind-ps-and-qs.js');
const hasAllVowels = tryRequire('../problems/4-has-all-vowels.js');
const favoriteWord = tryRequire('../problems/5-favorite-word.js');
const decomposingFunctions = tryRequire('../problems/6-decomposing-functions.js');
const isPrime = decomposingFunctions.isPrime;
const firstNPrimes = decomposingFunctions.firstNPrimes;
const sumOfNPrimes = decomposingFunctions.sumOfNPrimes;

describe('missyElliot()', function () {
  it('should return a string where the words are flipped and reversed', function () {
    const arr = [ 'siht', 'esrever', 'dna', 'pilf', 'attog', 'uoY' ];
    const lyricsArr = ['ti', 'esrever', 'dna', 'ti', 'pilf', 'nwod', 'gnaht', 'ym', 'tup', 'I'];
    assert.equal(missyElliot(arr), 'You gotta flip and reverse this');
    assert.equal(missyElliot(lyricsArr), 'I put my thang down flip it and reverse it');
  });
});

describe('oddWordsOut()', function () {
  it('should return a string where any word of odd length is removed', function () {
    assert.equal(oddWordsOut('go to the store and buy milk'), 'go to milk');
    assert.equal(oddWordsOut('what is the answer'), 'what is answer');
  });
});

describe('hasAllVowels()', function () {
  it('should return a boolean true if a string has all vowels present, false otherwise', function () {
    assert.equal(hasAllVowels('have you gone biking?'), true);
    assert.equal(hasAllVowels('get out of the way, silly'), true);
    assert.equal(hasAllVowels('software engineer'), false);
    assert.equal(hasAllVowels('hello world'), false);
  });
});

describe('mindPsAndQs()', function () {
  it('should return the length of the longest streak of P\'s and Q\'s', function () {
    assert.equal(mindPsAndQs('ENGINEERING'), 0);
    assert.equal(mindPsAndQs('APCDQQPPC'), 4);
    assert.equal(mindPsAndQs('PQPQ'), 4);
    assert.equal(mindPsAndQs('PPPXQPPPQ'), 5);
  });
});

describe('favoriteWord()', function () {
  it('should return the word where favoriteLetter appears most', function () {
    var str = 'sinful caesar sipped his snifter';

    assert.equal(favoriteWord('p', str), 'sipped');
    assert.equal(favoriteWord('a', str), 'caesar');
    assert.equal(favoriteWord('s', str), 'sinful');
    assert.equal(favoriteWord('x', str), '');
  });
});

describe('decomposingFunctions', function () {
  it ("isPrime() should return a boolean true if number is prime, false otherwise", function () {
    assert.equal(isPrime(2), true);
    assert.equal(isPrime(1693), true);
    assert.equal(isPrime(15), false);
    assert.equal(isPrime(303212), false);
  });

  it ("firstNPrimes() should return an array of the first n primes", function () {
    assert.deepEqual(firstNPrimes(0), []);
    assert.deepEqual(firstNPrimes(1), [2]);
    assert.deepEqual(firstNPrimes(4), [2, 3, 5, 7]);
  });

  it ("sumOfNPrimes() should return the sum of the first n primes", function () {
    assert.equal(sumOfNPrimes(0), 0);
    assert.equal(sumOfNPrimes(1), 2);
    assert.equal(sumOfNPrimes(4), 17);
  });
});