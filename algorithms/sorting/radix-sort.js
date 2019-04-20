/**
 * Get the digit in num at the given place value
 * 
 * @param {number} num 
 * @param {number} i 
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

/**
 * Get the number of digits in num
 * 
 * @param {number} num 
 */
function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

/**
 * Get the number of digits in the largest numbers in the array
 * 
 * @param {array} nums 
 */
function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

export default function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}
