/**
 * Find the count of matches short string within long string
 * 
 * @param {string} long 
 * @param {string} short 
 */
export default function naiveStringSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}
