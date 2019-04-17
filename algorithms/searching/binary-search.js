/**
 * Find element in array and return the element index by binary searching
 * @param {array} arr 
 * @param {string, number} val 
 */
export default function binarySearch(arr, val) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== val && start <= end) {
    if (val > arr[middle]) {
      start = middle + 1
    } else {
      end = middle - 1
    }
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === val ? middle : -1
}
