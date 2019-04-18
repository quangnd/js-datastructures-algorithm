/**
 * Return sorted array
 * 
 * @param {array} arr 
 */
export default function bubbleSort(arr) {
  const swapES5 = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
  }

  const swapES6 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapES5(arr, j, j + 1)
      }
    }
  }

  return arr
}
