/**
 * Find element in array and return the element index by linear method
 * 
 * @param {array} arr 
 * @param {string, number} val 
 */
export default function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100)
