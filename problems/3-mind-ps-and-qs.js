/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. This can also be solved using a
single loop!

Nested loops not needed!

Examples:
mindPsAndQs('ENGINEERING'); // => 0
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/


function mindPsAndQs(str) {
  if (str !== str.toUpperCase())
    return 'only uppercase strings are allowed';
  let [count, max] = [0, 0];
  for (const letter of str) {
    if ('PQ'.includes(letter)) {
      count++;
      max = Math.max(count, max);
    } else {
      max = Math.max(count, max);
      count = 0;
    }
  }
  return max;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mindPsAndQs;
