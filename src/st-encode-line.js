import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const arr = str.split('');
  let result = '';
  let counter = 1;
  let currentChar = '';
  for (let i = 0; i <= arr.length; i += 1) {
    if (currentChar === arr[i]) {
      counter += 1;
    } else {
      const digit = counter === 1 ? '' : counter;
      result = `${result}${digit}${currentChar}`;
      currentChar = arr[i];
      counter = 1;
    }
  }
  return result;
}
