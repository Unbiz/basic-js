import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = String(n).split('').map((item, i, arr) => {
    return Number([...arr.slice(0, i), ...arr.slice(i + 1)].join(''));
  });
  return Math.max(...arr);
}
