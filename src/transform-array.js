import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(Array.isArray(arr))) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let flag = false;
  let flag2 = false;
  const result = arr.reduce((acc, item, i) => {
    switch (item) {
      case '--discard-next':
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') flag2 = true;
        flag = true;
        return acc;
      case '--discard-prev':
        if (flag2 === true) {
          flag2 = false;
          return acc;
        }
        if (i > 0) acc.pop();
        return acc;
      case '--double-next':
        if (i < arr.length - 1) acc.push(arr[i + 1]);
        return acc;
      case '--double-prev':
        if (flag2 === true) {
          flag2 = false;
          return acc;
        }
        if (i > 0) acc.push(arr[i - 1]);
        return acc;
      default:
        if (flag === true) {
          flag = false;
          return acc;
        } else {
          acc.push(item);
          return acc;
        }
    }
  }, []);
  return result;
}
