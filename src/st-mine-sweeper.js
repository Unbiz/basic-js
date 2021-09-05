import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getNumberofMine(matrix, row, col) {
  let sum = 0;
  for (let i = row - 1; i <= row + 1; i += 1) {
    if (i >= 0 && i < matrix.length) {
      for (let j = col - 1; j <= matrix[i].length; j += 1) {
        if (j >= 0 && j < matrix[i].length && matrix[i][j] === true && !(i === row && j === col)) {
          sum += 1;
        }
      }
    }
  }
  return sum;
}

export default function minesweeper(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      newMatrix[i][j] = getNumberofMine(matrix, i, j);
    }
  }
  return newMatrix;
}
