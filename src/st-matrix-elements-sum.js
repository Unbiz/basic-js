import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const result = matrix.reduce((acc, line, i) => {
    const sumOfline = line.reduce((sum, item, j) => {
      if (i > 0 && matrix[i - 1][j] === 0) {
        return sum;
      }
      return sum + item;
    }, 0);
    return acc + sumOfline;
  }, 0);
  return result;
}
