import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  function count(str) {
    return str.split('').reduce((acc, item) => {
      if (!(item in acc)) acc[item] = 0;
      acc[item] += 1;
      return acc;
    }, {});
  }

  const countedS1 = count(s1);
  const countedS2 = count(s2);
  let result = 0;
  for (const key in countedS1) {
    if (countedS2[key] !== undefined) {
      result += Math.min(countedS1[key], countedS2[key]);
    }
  }
  return result;
}
