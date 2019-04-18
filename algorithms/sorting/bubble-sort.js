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

  let isSwap; //optimize for nearly sorted array
  for (let i = arr.length; i > 0; i--) {
    isSwap = false
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapES5(arr, j, j + 1)
        isSwap = true
      }
    }
    if (!isSwap) break
  }

  return arr
}
