/**
 * Only care about the space complexity 
 * O(1) space, no matter the size of the input
*/
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
