/*
Spiral Traversal of A Matrix

Given a two-dimentional matrix with m rows and n columns (m x n matrix), return its spiral ordering starting from the top left of the matrix (row 0, col 0)

Input:
[
 [ 1, 2, 3],
 [ 4, 5, 6],
 [ 7, 8, 9]
]
Output: [1,2,3,6,9,8,7,4,5]

Input:
[
  [1,2],
  [3,4],
  [5,6],
  [7,8]
]
Output: [1,2,4,6,8,7,5,3]

edge case: empty array
optimize
time complexity:
space complexity: 
*/

const spiralMatrix = (matrix) => {
  const resultArray = [];

  if (matrix.length === 0) {
    return resultArray;
  }

  //restricting boundaries of the matrix
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1; //last row in matrix
  let right = matrix[0].length - 1; //last column in matrix

  while (top <= bottom && left <= right) {
    //walk the top row
    for (let col = left; col <= right; col++) {
      resultArray.push(matrix[top][col]);
    }
    //move to the next top
    top++;

    //walk the right column
    for (let row = top; row <= bottom; row++) {
      resultArray.push(matrix[row][right]);
    }
    //move to the left;
    right--;
    //if center is a horizontal line, prevent bottom from rereading what the top already read
    if (top <= bottom) {
      //walk bottom row
      for (let col = right; col >= left; col--) {
        resultArray.push(matrix[bottom][col]);
      }
    }
    bottom--;
    //if center is a vertical line, prevent the left from rereading what the right column already read
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        resultArray.push(matrix[row][left]);
      }
      left++;
    }
  }

  return resultArray;
};

let matrix = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(spiralMatrix(matrix));
