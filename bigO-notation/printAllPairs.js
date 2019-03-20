/**
 * O(n) operation inside of an O(n) operation
 * O(n * n)
 * @param {number} n 
 */

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printAllPairs(10));
